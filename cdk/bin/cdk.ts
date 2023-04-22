#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStaticWebsiteHostingStack } from '../lib/cdk-stack';

// Ensure environment variable called "DEPLOYMENT_ENVIRONMENT" is defined
if (process.env.DEPLOYMENT_ENVIRONMENT == undefined) {
  console.error("ERROR: you MUST provide <DEPLOYMENT_ENVIRONMENT> as an environment variable");
  process.exit(1);
}

const DEPLOYMENT_ENVIRONMENT = process.env.DEPLOYMENT_ENVIRONMENT;
const MAIN_RESOURCES_NAME = "san99tiago-cv";

const app = new cdk.App();
const myCdkStack = new CdkStaticWebsiteHostingStack(
  app,
  MAIN_RESOURCES_NAME,
  DEPLOYMENT_ENVIRONMENT,
  MAIN_RESOURCES_NAME,
  {
    stackName: `cdk-${MAIN_RESOURCES_NAME}-${DEPLOYMENT_ENVIRONMENT}`,
    env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
    description: `Stack with the infrastructure for ${MAIN_RESOURCES_NAME} in ${DEPLOYMENT_ENVIRONMENT} environment`
  }
);

cdk.Tags.of(myCdkStack).add('Environment', DEPLOYMENT_ENVIRONMENT);
cdk.Tags.of(myCdkStack).add('MainResourcesName', MAIN_RESOURCES_NAME);
cdk.Tags.of(myCdkStack).add('RepositoryUrl', 'https://github.com/san99tiago/san99tiago-cv')
cdk.Tags.of(myCdkStack).add('Source', 'san99tiago-cv')
cdk.Tags.of(myCdkStack).add('Owner', 'Santiago Garcia Arango');
cdk.Tags.of(myCdkStack).add('Usage', 'Static site for my single page application for san99tiago.com');
