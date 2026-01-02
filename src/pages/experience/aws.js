import {
  Container,
  Badge,
  Box,
  Heading,
  Link,
  SimpleGrid,
  Image
} from '@chakra-ui/react'

import { ExternalLink } from 'lucide-react'
import {
  Title,
  BadgeStyle,
  BadgeGreen,
  BadgeYellow,
  ExperienceSection,
  ExperienceSubSection,
  ExperienceEmphasis,
  ExperienceImage
} from '../../components/experience'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'

const ExperienceAWS = () => (
  <Layout title="Amazon Web Services">
    <Container
      maxW={{ base: '100%', md: '80%', lg: '70%', xl: '60%' }}
      px={{ base: 4, md: 6, lg: 8 }}
    >
      <Title>
        Amazon Web Services <Badge>2024-present</Badge>
      </Title>
      <P>
        Amazon Web Services (AWS) is the world&apos;s most comprehensive and
        broadly adopted cloud platform, offering over 200 fully featured
        services from data centers globally. &nbsp;
        <Link href="https://aws.amazon.com" target="_blank">
          https://aws.amazon.com
          <ExternalLink
            size={12}
            style={{ marginLeft: '2px', display: 'inline' }}
          />
        </Link>
      </P>

      <Box height="1px" bg="gray.200" my={5} width="100%" />
      <Box style={{ marginTop: '10px' }} />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Solutions Architect (2024-present)
        </Heading>
        <ExperienceImage
          src="/images/experience/2024_11_25_experience_aws.png"
          alt="AWS Solutions Architect Thumbnail"
        />
        <ExperienceSection>
          <ExperienceEmphasis>Description</ExperienceEmphasis>
          As a Solutions Architect at AWS, I design and implement advanced
          Cloud-Based architectures for top FSI (Financial Services Industry)
          clients across LATAM, helping them achieve their digital
          transformation goals with cutting-edge AWS services.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeGreen>Technologies</BadgeGreen>
          </BadgeStyle>
          AWS (Lambda, Bedrock, Step Functions, API Gateway, DynamoDB, S3,
          CloudFront, Bedrock, SageMaker AI, Organizations, Cognito,
          EventBridge, etc..), Python, TypeScript, CDK, Terraform, Agent
          Frameworks (Strands, LangChain, LangGraph), Docker, Kubernetes, GenAI
          (LLMs, RAG, Fine-Tuning, Tools, MCPs, A2A).
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeYellow>Highlights</BadgeYellow>
          </BadgeStyle>
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Leading Generative AI adoption initiatives for enterprise
          customers, helping them leverage AWS AI/ML services like Amazon
          Bedrock to build innovative solutions.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Designing and implementing CORE banking migrations to AWS,
          ensuring high availability, security, and compliance with financial
          industry regulations.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Architecting Serverless solutions that enable customers to
          build scalable, cost-effective applications with minimal operational
          overhead.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Developing cloud and AI strategies at both technical and
          business levels for robust companies, aligning technology decisions
          with business objectives.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Collaborating with C-level executives and technical teams to
          define roadmaps and best practices for cloud adoption and
          modernization.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Contributing to the AWS community through technical content,
          videos, and talks at AWS User Groups and conferences:
          <Box style={{ marginTop: '10px' }} />
          <ExperienceSubSection>
            <Link
              href="https://www.linkedin.com/posts/san99tiago_aws-amazonian-customerobsession-activity-7383719901473034240-AQ5c"
              target="_blank"
            >
              AWS Summit Speaker for NequiBot Scaling with GenAI Customer
              Support
            </Link>
          </ExperienceSubSection>
          <ExperienceSubSection>
            <Link
              href="https://www.linkedin.com/posts/danielsaldarriaga_nequi-ha-duplicado-clientes-con-cr%C3%A9ditos-activity-7365858633265385472-_wHq"
              target="_blank"
            >
              AWS Cibest/Nequi IA con AWS para Créditos
            </Link>
          </ExperienceSubSection>
          <ExperienceSubSection>
            <Link
              href="https://www.linkedin.com/posts/wompi_efectowompi-ugcPost-7377452651351011328-JxFH"
              target="_blank"
            >
              Wompi AI with AWS - WAI University
            </Link>
          </ExperienceSubSection>
          <ExperienceSubSection>
            <Link
              href="https://www.linkedin.com/posts/san99tiago_alwaysdayone-aws-insideamazon-activity-7266980077798625281-kUNe"
              target="_blank"
            >
              First Day One at AWS
            </Link>
          </ExperienceSubSection>
        </ExperienceSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          AWS Events & Community Photos
        </Heading>
        <SimpleGrid columns={2} spacing={4} mt={4}>
          <Image
            src="/images/experience/aws-events-2025/2025_02_01_AWS_Event_ReInvent_ReCap.jpg"
            alt="AWS re:Invent Recap Event 2025"
            borderRadius="lg"
          />
          <Image
            src="/images/experience/aws-events-2025/2025_03_01_AWS_Event_AI_Responsable.jpg"
            alt="AWS Responsible AI Event 2025"
            borderRadius="lg"
          />
          <Image
            src="/images/experience/aws-events-2025/2025_04_01_AWS_AIOps_Clients.jpg"
            alt="AWS AIOps with Clients 2025"
            borderRadius="lg"
          />
          <Image
            src="/images/experience/aws-events-2025/2025_05_05_AWS_Event_AI.jpg"
            alt="AWS AI Event 2025"
            borderRadius="lg"
          />
          <Image
            src="/images/experience/aws-events-2025/2025_08_01_AWS_Event_Q_Dev.jpg"
            alt="AWS Q Developer Event 2025"
            borderRadius="lg"
          />

          <Image
            src="/images/experience/aws-events-2025/2025_10_09_AWS_Summit_01.jpeg"
            alt="AWS Summit 2025"
            borderRadius="lg"
          />
          <Image
            src="/images/experience/aws-events-2025/2025_09_09_aws_bintec_photos.jpg"
            alt="AWS Bintec Event 2025"
            borderRadius="lg"
          />
          <Image
            src="/images/experience/aws-events-2025/2025_08_08_aws_ug_med_agentcore.jpg"
            alt="AWS User Group Medellin AgentCore 2025"
            borderRadius="lg"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default ExperienceAWS
