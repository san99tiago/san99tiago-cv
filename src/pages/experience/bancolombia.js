import { Container, Badge, Box, Heading, Link } from '@chakra-ui/react'

import { ExternalLink } from 'lucide-react'
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

const ExperienceBancolombia = () => (
  <Layout title="Bancolombia">
    <Container>
      <Title>
        Bancolombia <Badge>2021-2022</Badge>
      </Title>
      <P>
        Bancolombia is a leading financial group that sets trends, generates a
        superior experience for our customers, is a source of pride for our
        employees and adds value for our shareholders, in a sustainable manner.
        &nbsp;
        <Link href="https://www.grupobancolombia.com" target="_blank">
          https://www.grupobancolombia.com
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
          Software Engineering Specialist (DevOps)
        </Heading>
        <ExperienceImage
          src="/images/experience/2021_07_01_experience_bancolombia.png"
          alt="Bancolombia Thumbnail Software Engineering Specialist"
        />
        <ExperienceSection>
          <ExperienceEmphasis>Description</ExperienceEmphasis>I played a crucial
          role in the development and automation of high-impact, transactional
          projects by leveraging cloud-native solutions on the AWS platform.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeGreen>Technologies</BadgeGreen>
          </BadgeStyle>
          AWS, Azure DevOps, Bash, Python, NodeJs, IBM WAS, IBM MQ, Docker, EKS,
          ELK, RHEL, Prometheus, Grafana.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeYellow>Highlights</BadgeYellow>
          </BadgeStyle>
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Played a key role in the CI/CD, automation and monitoring of
          a transactional product called &quot;
          <Link
            href="https://www.bancolombia.com/personas/cuentas/vivienda/cuenta-afc"
            target="_blank"
          >
            Cuenta AFC Bancolombia
          </Link>
          &quot; which allows customers to save money to buy a home with the
          possibility of obtaining tax benefits.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Contributed to enhancing the best DevSecOps practices to
          inner modules and core functionalities of &quot;
          <Link
            href="https://www.bancolombia.com/negocios/productos-financieros/sucursal-virtual-empresas"
            target="_blank"
          >
            Sucursal Virtual Empresas
          </Link>
          &quot; which is the transactional channel designed to meet the needs
          of SMEs and companies from anywhere, managing cash and investment
          products in a practical and secure way.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Implemented microservice architectures obtaining up to 99%
          deployment efficiencies with tools such as Docker, AWS, Azure DevOps,
          SonarQube and OWASP.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Participated in the migration (mostly refactors and
          replatforms) of 10+ transactional applications from on-premise data
          centers towards AWS and Azure clouds.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Developed numerous automation towards deployments, security
          configurations and upgrades of transactional applications with
          programmatic approaches such as AWS Lambdas (Python and NodeJs), Bash
          scripting, Pipeline tasks, AWS Cloudformation and Packer.
        </ExperienceSection>
        <ExperienceSection>
          &#x2022; Elaborated multiple bootcamps and projects for 200+
          colleagues related to AWS, DevOps and IBM products (WAS, MQ,
          OpenLiberty).
        </ExperienceSection>
      </Section>
    </Container>
  </Layout>
)

export default ExperienceBancolombia
