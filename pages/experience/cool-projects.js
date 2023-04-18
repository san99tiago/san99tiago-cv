import {
    Container,
    Badge,
    Heading,
    Link,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, BadgeStyle, BadgeGreen, BadgeYellow, ExperienceSection, ExperienceEmphasis } from '../../components/experience'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'

import DataJson from './cool-projects-data.json'


const ExperienceCoolProjects = () => (
    <Layout title="Cool Projects">
        <Container>
            <Title>
                Cool Projects <Badge>2017-present</Badge>
            </Title>
            <P>
                Cool Projects for personal experiments or for helping friends that have asked me to develop something challenging for them.
            </P>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Docker-Pirate
                </Heading>
                <ExperienceSection>
                    <ExperienceEmphasis>Description</ExperienceEmphasis>
                    Project that covers a series of relevant Docker Images with step-by-step details for their creation and with Docker-Compose functionalities enabled.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeGreen>Technologies</BadgeGreen></BadgeStyle>
                    Docker, Docker-Compose, DevOps, Jenkins, NodeJs, Flask, MySQL, MongoDB, ELK, IBM, GoLang, IBM, Ubuntu, Prometheus.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>Source Code</BadgeYellow></BadgeStyle>
                    <Link href="https://github.com/san99tiago/docker-pirate" target='_blank'>
                        https://github.com/san99tiago/docker-pirate<ExternalLinkIcon mx="2px" />
                    </Link>
                </ExperienceSection>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Terraform Playground
                </Heading>
                <ExperienceSection>
                    <ExperienceEmphasis>Description</ExperienceEmphasis>
                    Project with fun examples and PoCs to explore Terraform concepts and deployments in AWS.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeGreen>Technologies</BadgeGreen></BadgeStyle>
                    AWS, Terraform, IaC, DevOps.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>Source Code</BadgeYellow></BadgeStyle>
                    <Link href="https://github.com/san99tiago/terraform-playground" target='_blank'>
                        https://github.com/san99tiago/terraform-playground<ExternalLinkIcon mx="2px" />
                    </Link>
                </ExperienceSection>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    AWS Automation Medical Providers
                </Heading>
                <ExperienceSection>
                    <ExperienceEmphasis>Description</ExperienceEmphasis>
                    Automation that weekly downloads and updates medical records for different datasets.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeGreen>Technologies</BadgeGreen></BadgeStyle>
                    AWS, CDK, Lambda, EventBridge, SES, S3, IaC, DevOps.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>Source Code</BadgeYellow></BadgeStyle>
                    <Link href="https://github.com/san99tiago/aws-cdk-lambda-cms-provider-datasets" target='_blank'>
                        https://github.com/san99tiago/aws-cdk-lambda-cms-provider-datasets<ExternalLinkIcon mx="2px" />
                    </Link>
                </ExperienceSection>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    AWS Automation Medical Providers
                </Heading>
                <ExperienceSection>
                    <ExperienceEmphasis>Description</ExperienceEmphasis>
                    Automation that weekly downloads and updates medical records for different datasets.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeGreen>Technologies</BadgeGreen></BadgeStyle>
                    AWS, CDK, Lambda, EventBridge, SES, S3, IaC, DevOps.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>Source Code</BadgeYellow></BadgeStyle>
                    <Link href="https://github.com/san99tiago/aws-cdk-lambda-cms-provider-datasets" target='_blank'>
                        https://github.com/san99tiago/aws-cdk-lambda-cms-provider-datasets<ExternalLinkIcon mx="2px" />
                    </Link>
                </ExperienceSection>
            </Section>


                {/* TODO: MAKE DYNAMIC FROM INPUT JSON */}
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Test
                    </Heading>
                    <ExperienceSection>
                        <ExperienceEmphasis>Description</ExperienceEmphasis>
                        {DataJson[0]['description']}
                    </ExperienceSection>
                    <ExperienceSection>
                        <BadgeStyle><BadgeGreen>Technologies</BadgeGreen></BadgeStyle>
                        AWS, CDK, Lambda, EventBridge, SES, S3, IaC, DevOps.
                    </ExperienceSection>
                    <ExperienceSection>
                        <BadgeStyle><BadgeYellow>Source Code</BadgeYellow></BadgeStyle>
                        <Link href="https://github.com/san99tiago/aws-cdk-lambda-cms-provider-datasets" target='_blank'>
                            https://github.com/san99tiago/aws-cdk-lambda-cms-provider-datasets<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ExperienceSection>
                </Section>


                {/* AWS REST-API and MySQL
                REST-API on top of AWS API Gateway (with Lambdas integration) that connected to MySQL database for commercial "leads" information.
                https://github.com/san99tiago/freelance-aws-rest-api-mysql


                AWS CDK Templates for Lambda Docker Images
                My own CDK template (pattern) for deploying AWS Lambda Functions on top of Docker images.
                https://github.com/san99tiago/aws-cdk-lambda-docker-templates


                AWS REST-API for URL Shortening
                Fun AWS CDK solution with an API Gateway and DynamoDB that is designed for URL shortening.
                https://github.com/san99tiago/aws-cdk-url-shortener


                AWS CDK Athena and Glue Template for multi S3 Workflow
                Simple CDK-TypeScript project for a Athena/Glue workflow for simple ETL solution on top of S3.
                https://github.com/san99tiago/aws-cdk-athena-s3-workflow


                AWS CDK Hello World
                Simple CDK project with best practices for a "Hello World" Lambda Function.
                https://github.com/san99tiago/aws-cdk-hello-world


                AWS Lambda Web Scrapper for Supplier Datasets
                Custom-built solution for web scrapping different supplier datasets that runs on AWS-Lambda with Docker images and Selenium.
                https://github.com/san99tiago/aws-cdk-lambda-medical-pecos-files


                REST-API for Australian Climate Sensors
                API developed on top of NodeJS+Express, and used MongoDB (Atlas) for backend. Solution with Docker containers.
                https://github.com/san99tiago/docker-api-express-mongo


                My Own CloudFormation Example Templates
                Simple AWS CF templates to review previously deployed PoCs. Mostly for sandbox environments.
                https://github.com/san99tiago/aws-cf-custom-templates


                AWS Lambda for Downloading HR Files
                Automation on AWS Lambda for downloading Human Resources files to S3 bucket based on rules (if already downloaded or not).
                https://github.com/san99tiago/freelance-lambda-leie-automation


                Python Clean Tests Examples and Templates
                Useful Python examples for Clean Code and Unit Testing on top of UnitTest Framework and PyTest.
                https://github.com/san99tiago/python-clean-tests


                Python GUI Desktop Applications and Games
                Some of my cool Python GUI projects on top of Tkinter and PyQT.
                https://github.com/san99tiago/PYTHON_GUI


                Low Level Machine Learning Experiments
                Multiple challenging Machine Learning problems and solutions on top of Python and MatLab.
                https://github.com/san99tiago/ML_BASICS


                Low Level Robotics Experiments
                Multiple challenging Robotics problems and solutions on top of Python and MatLab.
                https://github.com/san99tiago/ROBOTICS_BASICS


                Low Level Computer Vision Experiments
                Multiple challenging Computer Vision problems and solutions on top of OpenCV (Python).
                https://github.com/san99tiago/OPENCV_BASICS


                Low Level Internet of Things Experiments
                Multiple challenging Internet of Things problems and solutions on top of JavaScript, Python and Arduino.
                https://github.com/san99tiago/IOT_EIA


                Hackathon Multi-Purpose Projects
                Some projects of my previous Hackathons.
                https://github.com/san9tiago/MULTIPLE_PROJECTS


                Projects for learning GoLang
                These are my awesome experiments and PoCs for learning Go (GoLang).
                https://github.com/san99tiago/go-gopher-go


                Projects for learning Java
                These are my awesome experiments and PoCs for learning Java.
                https://github.com/san99tiago/java-barista


                Projects for learning JavaScript
                These are my awesome experiments and PoCs for learning JavaScript.
                https://github.com/san99tiago/javascript-legend


                Python Problem Solving Code Practices
                These are some of my own practice LeetCode (and similar) solutions for Coding challenges on Python.
                https://github.com/san99tiago/python-problem-solving-chief


                My Learning Projects for Flask Framework (Python)
                Cool learning PoCs and experiments for mastering Python Flask Framework.
                https://github.com/san99tiago/WEB_FLASK_PLATZI


                Harvard CS50's Web Programming Course
                Multiple FullStack Projects inspired from the CS50 Web Programming course given at Harvard University.
                https://github.com/san99tiago/WEB_STANFORD


                Desktop App for Architecture Business
                Automation of Excel Sheets for small architecture firm. Project allowed automatic accounting and project organization.
                https://github.com/san99tiago/ARCHITECTURE_AUTOMATION */}


        </Container>
    </Layout>
)

export default ExperienceCoolProjects
