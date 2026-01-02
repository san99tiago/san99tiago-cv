import { Container, Badge, Heading, Link } from '@chakra-ui/react'
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

const ExperienceTemplate = () => (
  <Layout title="Experience X">
    <Container>
      <Title>
        Experience X <Badge>2023-present</Badge>
      </Title>
      <P>Experience X general explanation.</P>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Experience X Sub-Experience 1
        </Heading>
        <ExperienceSection>
          <ExperienceEmphasis>Description</ExperienceEmphasis>
          Project that XXXX and YYYY.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeGreen>Technologies</BadgeGreen>
          </BadgeStyle>
          Docker, Docker-Compose, Jenkins, NodeJs, Flask, MySQL, MongoDB, ELK,
          IBM, GoLang, IBM, Ubuntu, Prometheus.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeYellow>Source Code</BadgeYellow>
          </BadgeStyle>
          <Link
            href="https://github.com/san99tiago/docker-pirate"
            target="_blank"
          >
            https://github.com/san99tiago/docker-pirate
            <ExternalLink
              size={12}
              style={{ marginLeft: '2px', display: 'inline' }}
            />
          </Link>
        </ExperienceSection>
      </Section>

      <ExperienceImage
        src="/images/experience/2018_01_01_experience_cool_projects.png"
        alt="change_me_to_something_relevant"
      />
    </Container>
  </Layout>
)

export default ExperienceTemplate
