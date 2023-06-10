import NextLink from 'next/link'
import {
    Box,
    Button,
    Divider,
    Container,
    Heading,
    Link,
    SimpleGrid,
    Text,
    useColorModeValue,
    chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Image from 'next/image'

// Main components
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// End page thumbnails
import thumbYouTube from '../public/images/home/thumbnail_san99tiago_youtube.png'
import thumbGitHub from '../public/images/home/thumbnail_san99tiago_github.png'
import thumbLinkedin from '../public/images/home/thumbnail_san99tiago_linkedin.png'
import thumbInstagram from '../public/images/home/thumbnail_san99tiago_instagram.png'


const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>

            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Hey, I love to learn new tech things everyday!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading
                        as="h2"
                        variant="page-title"
                    >
                        Santiago Garcia Arango
                    </Heading>
                    {<p> DevSecOps | AWS Community Builder | Serverless </p>}
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="120px"
                        h="120px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/SantiagoGarciaArango.jfif"
                            alt="Profile Image - Santiago Garcia Arango"
                            borderRadius="full"
                            width="120"
                            height="120"
                        />
                    </Box>
                </Box>
            </Box>

            <Box>
                <Text>{``}</Text>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Who Am I?
                </Heading>

                <Paragraph>
                    As a curious Mechatronics Engineer, I&lsquo;m passionate about creating cutting-edge software using event-driven architectures. I&lsquo;m currently immersed in production-grade AWS workflows, leveraging DevSecOps best practices to drive innovation.
                </Paragraph>

                <Box style={{marginTop: '10px'}}/>

                <Paragraph>
                    Likewise, I&lsquo;m passionate about sharing my knowledge in fun ways and learning the art of &quot;how everything actually works&quot;, driven by a vision of a better future thanks to technology. I&lsquo;m eager to be part of the ongoing transformation of technology and its interesting impact on our daily lives.
                </Paragraph>

                <Box style={{marginTop: '10px'}}/>

                <Paragraph>
                    Discover my starting YouTube channel for exciting Spanish content:
                    &quot;
                    <Link
                        as={NextLink}
                        href="https://www.youtube.com/@san99tiago"
                        passHref
                        target="_blank"
                        >
                        Santiago Garcia Arango Tech
                    </Link>
                    &quot; where I upload cool videos about DevOps and AWS.
                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/content"
                        // scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        Explore my latest posts!
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Technical Tools
                </Heading>
                <BioSection>
                    <BioYear>Languages</BioYear>
                    Python, JavaScript, TypeScript, Bash, HTML, CSS, GoLang, Java, SQL, GraphQL, MATLAB, Arduino.
                </BioSection>
                <BioSection>
                    <BioYear>Methodologies</BioYear>
                    CI/CD, Infrastructure as Code, DevSecOps, Event Driven Architectures, TDD, SOLID, Design Patterns, Scrum, Clean Code, Static Code Analysis, Pair Programming.
                </BioSection>
                <BioSection>
                    <BioYear>Technical</BioYear>
                    Git, AWS (see details below), Terraform, Docker, Kubernetes, Linux Distributions, GitLab CI, Azure DevOps, Jenkins, SonarQube, SQL, No-SQL, IBM WAS, IBM MQ, Packer, OWASP, MetaSploit, Wireshark, Netcat, IoT, LaTex.
                </BioSection>
                <BioSection>
                    <BioYear>AWS Experience</BioYear>
                    [AWS Certified x2], IAM, CloudFormation, CDK, Organizations, Lambda, Lambda Layer, API Gateway, DynamoDB, CloudWatch, S3, CloudFront, Step Functions, SQS, SNS, SES, Route53, ACM, AMI, EC2, EBS, EFS, ASG, VPC, Transit Gateway, IPAM, Athena, Glue, SSM, CodeBuild, CodePipeline, IAM Identity Center, Control Tower, Chime.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Education & Experience
                </Heading>
                <BioSection>
                    <BioYear>2023-present</BioYear>
                    Lead Systems Engineer (DevOps)
                    <a href="https://www.epam.com" target="_blank"><b> @ EPAM Systems</b></a>
                </BioSection>
                <BioSection>
                    <BioYear>2022-2023</BioYear>
                    Senior Systems Engineer (DevOps)
                    <a href="https://www.epam.com" target="_blank"><b> @ EPAM Systems</b></a>
                </BioSection>
                <BioSection>
                    <BioYear>2022-present</BioYear>
                    M.S. Cybersecurity
                    <a href="https://www.imf-formacion.com" target="_blank"><b> @ IMF Smart Education</b></a>
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Software Engineering Specialist (DevOps)
                    <a href="https://www.grupobancolombia.com" target="_blank"><b> @ Bancolombia</b></a>
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    DevOps Engineer
                    <a href="https://www.pragma.co" target="_blank"><b> @ PRAGMA</b></a>
                </BioSection>
                <BioSection>
                    <BioYear>2017-2021</BioYear>
                    B.S. Mechatronics Engineering
                    <a href="https://www.eia.edu.co" target="_blank"><b> @ EIA University</b></a>
                </BioSection>
            </Section>

            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    Find Out More
                </Heading>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.youtube.com/@san99tiago"
                        title="Santiago Garcia Arango Tech"
                        alt="YouTube Santiago Garcia Arango"
                        thumbnail={thumbYouTube}
                        >
                        DevOps and AWS Tutorials!
                    </GridItem>
                    <GridItem
                        href="https://github.com/san99tiago"
                        title="GitHub san99tiago"
                        alt="GitHub san99tiago"
                        thumbnail={thumbGitHub}
                        >
                        Open Source projects!
                    </GridItem>
                    <GridItem
                        href="https://www.linkedin.com/in/san99tiago/"
                        title="LinkedIn san99tiago"
                        alt="LinkedIn san99tiago"
                        thumbnail={thumbLinkedin}
                        >
                    </GridItem>
                    <GridItem
                        href="https://instagram.com/san99tiago"
                        title="Instagram san99tiago"
                        alt="Instagram san99tiago"
                        thumbnail={thumbInstagram}
                    >
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Home
