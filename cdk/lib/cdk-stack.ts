import { Duration, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3_deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53targets from 'aws-cdk-lib/aws-route53-targets';


export class CdkStaticWebsiteHostingStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    deploymentEnvironment: string,
    mainResourcesName: string,
    props?: StackProps
  ) {
    super(scope, id, props);

    // Main variables based on environment variables and fixed values
    const hostedZoneName = deploymentEnvironment == 'prod' ? 'san99tiago.com' : `${deploymentEnvironment}.san99tiago.com`;
    const domainName = `cv.${hostedZoneName}`;
    const mainBucketName = domainName;
    const bucketVersioningEnabled = deploymentEnvironment == 'prod' ? true : false;

    // Create S3 bucket for hosting static website (main one)
    const mainBucket = new s3.Bucket(this, 'BucketMain', {
      bucketName: mainBucketName,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      accessControl: s3.BucketAccessControl.PRIVATE,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: bucketVersioningEnabled,
      enforceSSL: true,
      autoDeleteObjects: true,  // Enable force delete of objects when deleting stack
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // Add static files from the 'out' folder to the S3 bucket for the web-hosting capabilities
    const _s3DeployFiles = new s3_deploy.BucketDeployment(this, 'BucketMainDeployFiles', {
      sources: [s3_deploy.Source.asset('../src/out')],
      destinationBucket: mainBucket,
    });

    // Obtain account R53 Hosted Zone for specific domain (these are previously created in each account)
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: hostedZoneName
    });

    // Add certificate
    // ! IMPORTANT: this is currently automatic, but if the R53 Hosted Zone is
    // ! ... in another account, this has to be done manually by DNS validation
    const certificate = new acm.DnsValidatedCertificate(this, 'Certificate', {
      domainName: domainName,
      hostedZone: hostedZone,
      subjectAlternativeNames: [`www.${domainName}`],  // To also allow the common 'www' prefix
      region: 'us-east-1',
    });
    certificate.metricDaysToExpiry().createAlarm(this, 'AlarmCertificateExpiration', {
      comparisonOperator: cloudwatch.ComparisonOperator.LESS_THAN_THRESHOLD,
      evaluationPeriods: 1,
      threshold: 45, // Automatic rotation happens between 60 and 45 days before expiry
    });

    // Configure CloudFront distribution serving files from S3 bucket
    const cloudfrontOriginAccessIdentity = new cloudfront.OriginAccessIdentity(this, 'CloudFrontOriginAccessIdentity', {
      comment: `Special CloudFront user for s3 for ${mainResourcesName} solution`,
    })
    mainBucket.grantRead(cloudfrontOriginAccessIdentity)

    // Add a CloudFront Function to update requests from "<random-path>" to...
    // ... "<random-path>.html" to be complaint with NextJS static files
    const rewriteFunction = new cloudfront.Function(this, 'Function', {
      comment: 'Function to rewrite urls with complaint html files of NextJS files',
      functionName: `${mainResourcesName}-url-rewrite-cloudfront`,
      code: cloudfront.FunctionCode.fromFile({ filePath: '../lambda/url-rewrite.js' }),
    });

    // Add CloudFront extra security headers
    const responseHeaderPolicy = new cloudfront.ResponseHeadersPolicy(this, 'SecurityHeadersResponseHeaderPolicy', {
      comment: 'Security headers response header policy',
      securityHeadersBehavior: {
        contentSecurityPolicy: {
          override: true,
          contentSecurityPolicy: "default-src 'self'"
        },
        strictTransportSecurity: {
          override: true,
          accessControlMaxAge: Duration.days(2 * 365),
          includeSubdomains: true,
          preload: true
        },
        contentTypeOptions: {
          override: true
        },
        referrerPolicy: {
          override: true,
          referrerPolicy: cloudfront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN
        },
        xssProtection: {
          override: true,
          protection: true,
          modeBlock: true
        },
        frameOptions: {
          override: true,
          frameOption: cloudfront.HeadersFrameOption.DENY
        }
      }
    });

    // Binding functionalities with the created CloudFront distribution
    const cloudfrontDistribution = new cloudfront.Distribution(this, 'CloudFrontDistribution', {
      comment: `CloudFront distribution for ${mainResourcesName} solution with S3 bucket origin`,
      certificate: certificate,
      domainNames: [domainName, `www.${domainName}`],
      defaultRootObject: '/index.html',
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(mainBucket, {
          originAccessIdentity: cloudfrontOriginAccessIdentity
        }),
        functionAssociations: [{
          function: rewriteFunction,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST
        }],
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        // responseHeadersPolicy: responseHeaderPolicy
      },
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html'
        }
      ],
      enabled: true,
    });

    // After distribution is ready, lets add an "A Record" in the R53 HZ for the
    // ... domain that points to the CloudFront distribution
    const hostedZoneARecod = new route53.ARecord(this, 'ARecord', {
      comment: `A type Record target for ${mainResourcesName} solution in ${deploymentEnvironment} env`,
      target: route53.RecordTarget.fromAlias(new route53targets.CloudFrontTarget(cloudfrontDistribution)),
      recordName: domainName,
      zone: hostedZone,
    });
    const hostedZoneARecodWWW = new route53.ARecord(this, 'ARecordWWW', {
      comment: `A type Record www target for ${mainResourcesName} solution in ${deploymentEnvironment} env`,
      target: route53.RecordTarget.fromAlias(new route53targets.CloudFrontTarget(cloudfrontDistribution)),
      recordName: `www.${domainName}`,
      zone: hostedZone,
    });
    // ! IMPORTANT: this A record will allow to show the content but will NOT do
    // ! the redirect. If redirect is needed, we would have to create an S3 bucket
    // ! with static hosting enabled and a redirect rule (plus R53 record also)

  }
}
