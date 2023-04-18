import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Cool Projects">
        <Container>
            <Title>
                Cool Projects <Badge>2018-present</Badge>
            </Title>
            <P>
                Cool Projects for personal PoCs or for friends that ask me to develop something for them.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Docker-Pirate for Creating Custom Docker Images</Meta>
                    <span>This repository covers a series of relevant Docker Images creation step-by-step and with Docker-Compose functionalities enabled.</span>
                    <Link href="https://github.com/san99tiago/docker-pirate">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Terraform Playground with my Own IaC Examples</Meta>
                    <span>A really fun repository to explore Terraform concepts and deployments in AWS.</span>
                    <Link href="https://github.com/san99tiago/terraform-playground">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>AWS REST-API and MySQL</Meta>
                    <span>REST-API on top of AWS API Gateway (with Lambdas integration) that connected to MySQL database for commercial "leads" information.</span>
                    <Link href="https://github.com/san99tiago/freelance-aws-rest-api-mysql">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>AWS CDK Templates for Lambda Docker Images</Meta>
                    <span>My own CDK template (pattern) for deploying AWS Lambda Functions on top of Docker images.</span>
                    <Link href="https://github.com/san99tiago/aws-cdk-lambda-docker-templates">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>AWS Lambda Automation for Medical Providers</Meta>
                    <span>Automation that weekly downloads and updates medical records for different datasets.</span>
                    <Link href="https://github.com/san99tiago/aws-cdk-lambda-cms-provider-datasets">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>AWS REST-API for URL Shortening</Meta>
                    <span>Fun AWS CDK solution with an API Gateway and DynamoDB that is designed for URL shortening.</span>
                    <Link href="https://github.com/san99tiago/aws-cdk-url-shortener">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>AWS CDK Athena and Glue Template for multi S3 Workflow</Meta>
                    <span>Simple CDK-TypeScript project for a Athena/Glue workflow for simple ETL solution on top of S3.</span>
                    <Link href="https://github.com/san99tiago/aws-cdk-athena-s3-workflow">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>AWS CDK Hello World</Meta>
                    <span>Simple CDK project with best practices for a "Hello World" Lambda Function.</span>
                    <Link href="https://github.com/san99tiago/aws-cdk-hello-world">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>AWS Lambda Web Scrapper for Supplier Datasets</Meta>
                    <span>Custom-built solution for web scrapping different supplier datasets that runs on AWS-Lambda with Docker images and Selenium.</span>
                    <Link href="https://github.com/san99tiago/aws-cdk-lambda-medical-pecos-files">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>REST-API for Australian Climate Sensors</Meta>
                    <span>API developed on top of NodeJS+Express, and used MongoDB (Atlas) for backend. Solution with Docker containers.</span>
                    <Link href="https://github.com/san99tiago/docker-api-express-mongo">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>My Own CloudFormation Example Templates</Meta>
                    <span>Simple AWS CF templates to review previously deployed PoCs. Mostly for sandbox environments.</span>
                    <Link href="https://github.com/san99tiago/aws-cf-custom-templates">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>AWS Lambda for Downloading HR Files</Meta>
                    <span>Automation on AWS Lambda for downloading Human Resources files to S3 bucket based on rules (if already downloaded or not).</span>
                    <Link href="https://github.com/san99tiago/freelance-lambda-leie-automation">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Python Clean Tests Examples and Templates</Meta>
                    <span>Useful Python examples for Clean Code and Unit Testing on top of UnitTest Framework and PyTest.</span>
                    <Link href="https://github.com/san99tiago/python-clean-tests">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Python GUI Desktop Applications and Games</Meta>
                    <span>Some of my cool Python GUI projects on top of Tkinter and PyQT.</span>
                    <Link href="https://github.com/san99tiago/PYTHON_GUI">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Low Level Machine Learning Experiments</Meta>
                    <span>Multiple challenging Machine Learning problems and solutions on top of Python and MatLab.</span>
                    <Link href="https://github.com/san99tiago/ML_BASICS">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Low Level Robotics Experiments</Meta>
                    <span>Multiple challenging Robotics problems and solutions on top of Python and MatLab.</span>
                    <Link href="https://github.com/san99tiago/ROBOTICS_BASICS">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Low Level Computer Vision Experiments</Meta>
                    <span>Multiple challenging Computer Vision problems and solutions on top of OpenCV (Python).</span>
                    <Link href="https://github.com/san99tiago/OPENCV_BASICS">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Low Level Internet of Things Experiments</Meta>
                    <span>Multiple challenging Internet of Things problems and solutions on top of JavaScript, Python and Arduino.</span>
                    <Link href="https://github.com/san99tiago/IOT_EIA">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Hackathon Multi-Purpose Projects</Meta>
                    <span>Some projects of my previous Hackathons.</span>
                    <Link href="https://github.com/san99tiago/MULTIPLE_PROJECTS">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Projects for learning GoLang</Meta>
                    <span>These are my awesome experiments and PoCs for learning Go (GoLang).</span>
                    <Link href="https://github.com/san99tiago/go-gopher-go">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Projects for learning Java</Meta>
                    <span>These are my awesome experiments and PoCs for learning Java.</span>
                    <Link href="https://github.com/san99tiago/java-barista">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Projects for learning JavaScript</Meta>
                    <span>These are my awesome experiments and PoCs for learning JavaScript.</span>
                    <Link href="https://github.com/san99tiago/javascript-legend">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Python Problem Solving Code Practices</Meta>
                    <span>These are some of my own practice LeetCode (and similar) solutions for Coding challenges on Python.</span>
                    <Link href="https://github.com/san99tiago/python-problem-solving-chief">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>My Learning Projects for Flask Framework (Python)</Meta>
                    <span>Cool learning PoCs and experiments for mastering Python Flask Framework.</span>
                    <Link href="https://github.com/san99tiago/WEB_FLASK_PLATZI">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Harvard CS50's Web Programming Course</Meta>
                    <span>Multiple FullStack Projects inspired from the CS50 Web Programming course given at Harvard University.</span>
                    <Link href="https://github.com/san99tiago/WEB_STANFORD">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Desktop App for Architecture Business</Meta>
                    <span>Automation of Excel Sheets for small architecture firm. Project allowed automatic accounting and project organization.</span>
                    <Link href="https://github.com/san99tiago/ARCHITECTURE_AUTOMATION">
                        Code<ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

        </Container>
    </Layout>
)

export default Work
