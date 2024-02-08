import { Container, Badge, Box, Divider, Heading, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Title,
  BadgeStyle,
  BadgeGreen,
  BadgeYellow,
  ExperienceSection,
  ExperienceEmphasis,
  ExperienceImage
} from '../../components/experience'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'

const ExperiencePragma = () => (
  <Layout title="PRAGMA">
    <Container>
      <Title>
        PRAGMA <Badge>2021</Badge>
      </Title>
      <P>
        PRAGMA is a Colombian IT company devoted to provide digital agency
        services, digital transformation and business process automation
        solutions. &nbsp;
        <Link href="https://www.pragma.co" target="_blank">
          https://www.pragma.co
          <ExternalLinkIcon mx="2px" />
        </Link>
      </P>

      <Divider my={5} />
      <Box style={{ marginTop: '10px' }} />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          DevOps Engineer
        </Heading>
        <ExperienceImage
          src="/images/experience/2021_01_20_experience_pragma.png"
          alt="PRAGMA Thumbnail DevOps Engineer"
        />
        <ExperienceSection>
          <ExperienceEmphasis>Description</ExperienceEmphasis>I served as a
          DevOps Engineering consultant for two big prominent Colombian
          companies, supporting their &quot;Journey to the Cloud&quot;
          initiatives.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeGreen>Technologies</BadgeGreen>
          </BadgeStyle>
          AWS, Azure DevOps, Java, Python, JavaScript, Docker, Docker-Compose,
          Jenkins, Spring, Flask, Express, MySQL, MongoDB, Ubuntu, UnitTests,
          Selenium.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeYellow>Highlights</BadgeYellow>
          </BadgeStyle>
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Developed 1 core learning path with Docker, Jenkins and
          SonarQube projects for teaching DevOps in &quot;
          <Link
            href="https://www.pragma.com.co/academia/universo"
            target="_blank"
          >
            PRAGMA Academy
          </Link>
          &quot; which is an inner company learning site that has been used by
          more than 1000 developers.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Created the CI/CD design of 2 Cloud Infrastructure projects,
          with App/DB layers and pipelines on Azure DevOps, for enterprise cloud
          deployments (mainly AWS).
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Improved deployment times and efficiencies up to 90% by
          developing reusable Infrastructure as Code templates for AWS cloud
          architectures with tools such as CloudFormation, Terraform and Packer.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Supported the process of various migrations to the cloud,
          transforming 3 legacy applications, to cloud-native technologies and
          DevOps practices in an automated and highly available schema.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Assisted in the development of robust projects with
          microservices architecture, Docker/Kubernetes approaches and
          cloud-native technologies.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Supported the design of CI/CD pipelines for internal and
          external projects with tools like Jenkins, Azure Pipelines, AWS
          CodePipeline.
        </ExperienceSection>
      </Section>
    </Container>
  </Layout>
)

export default ExperiencePragma
