import {
    Container,
    Badge,
    Box,
    Divider,
    Heading,
    Link,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, BadgeStyle, BadgeGreen, BadgeYellow, ExperienceSection, ExperienceEmphasis, ExperienceImage } from '../../components/experience'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'


const ExperienceEpamSystems = () => (
    <Layout title="EPAM Systems">
        <Container>
            <Title>
                EPAM Systems <Badge>2023-present</Badge>
            </Title>
            <P>
                EPAM Systems is an American company that specializes in software engineering services, digital platform engineering, and digital product design. EPAM was named to Forbes' 25 Fastest Growing Public Tech Companies multiple times.
                &nbsp;
                <Link
                    href="https://www.epam.com"
                    target='_blank'
                    >
                    https://www.epam.com<ExternalLinkIcon mx="2px" />
                </Link>
            </P>

            <Divider my={5} />
            <Box style={{marginTop: '10px'}}/>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Senior Systems Engineer
                </Heading>
                <ExperienceImage
                    src="/images/experience/2022_04_01_experience_epam.png"
                    alt="EPAM Systems Thumbnail Senior Systems Engineer"
                />
                <ExperienceSection>
                    <ExperienceEmphasis>Description</ExperienceEmphasis>
                    As a DevSecOps and Cloud consultant, I provide my expertise to several top-tier global companies by utilizing AWS and implementing best practices for transactional Event-Driven Architectures.                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeGreen>Technologies</BadgeGreen></BadgeStyle>
                    AWS, GitLab, Python, TypeScript, JavaScript, Terraform, CDK, Bash, Docker, Kubernetes, Ubuntu, RHEL, SonarQube, Prometheus, Grafana.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>Highlights</BadgeYellow></BadgeStyle>
                </ExperienceSection>
                <ExperienceSection>
                    &#x2022; Contributed to the design of transactional solutions by implementing event-driven architectures that involved advanced cloud-native idempotent serverless workflows for payment processing.
                </ExperienceSection>
                <ExperienceSection>
                    &#x2022; Developed robust Infrastructure as Code solutions being used in 15+ teams as Terraform modules that worked as &quot;Cloud-Building-Blocks&quot; for simplifying AWS deployments with a complete CI/CD re-usable and highly configurable approach.
                </ExperienceSection>
                <ExperienceSection>
                    &#x2022; Contributed to the creation of deployment strategies for a multi-account and multi-region solution that impacted more than 100 AWS accounts and required an advanced understanding of networking, IaC, AWS CDK, AWS Control Tower and security concepts.
                </ExperienceSection>
                <ExperienceSection>
                    &#x2022; Built a cloud-native production level REST-API and CLI (decoupled) on AWS that helped in the automation of internal company-wide workflows containing more than 10 microservices with unit-testing, integration-testing and tunable deployments with GitLab CI/CD and external tools such as SonarQube and Checkov.
                </ExperienceSection>
                <ExperienceSection>
                    &#x2022; Contributed the CI/CD and Infrastructure as Code deployments of
                    &quot;
                    <Link
                        href="https://availia.io"
                        target='_blank'
                        >
                        Availia
                    </Link>
                    &quot;
                    which is a coordinator assistant platform created to reduce routing and improve performance.
                </ExperienceSection>
            </Section>

        </Container>
    </Layout>
)

export default ExperienceEpamSystems
