import { Badge, Container, Heading, Link, Box } from '@chakra-ui/react'

import { ExternalLink } from 'lucide-react'
import {
  Title,
  BadgeStyle,
  BadgeGreen,
  BadgeYellow,
  ExperienceSection,
  ExperienceEmphasis
} from '../../components/experience'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'

import DataJson from './cool-projects-data.json'

// Load sections data form external JSON and load them to "sections" list
const sections = []
for (let i = 0; i < DataJson.length; i++) {
  const project = DataJson[i]
  sections.push(
    <Section delay={0.1} key={project.title}>
      <Box height="1px" bg="gray.200" my={5} width="100%" />
      <Heading as="h3" variant="section-title">
        {project.title}
      </Heading>
      <ExperienceSection>
        <ExperienceEmphasis>Description</ExperienceEmphasis>
        {project.description}
      </ExperienceSection>
      <ExperienceSection>
        <BadgeStyle>
          <BadgeGreen>Technologies</BadgeGreen>
        </BadgeStyle>
        {project.technologies}
      </ExperienceSection>
      <ExperienceSection>
        <BadgeStyle>
          <BadgeYellow>Source Code</BadgeYellow>
        </BadgeStyle>
        <Link href={project.url} target="_blank">
          {project.url}
          <ExternalLink
            size={12}
            style={{ marginLeft: '2px', display: 'inline' }}
          />
        </Link>
      </ExperienceSection>
    </Section>
  )
}

const ExperienceCoolProjects = () => (
  <Layout title="Cool Projects">
    <Container
      maxW={{ base: '100%', md: '80%', lg: '70%', xl: '60%' }}
      px={{ base: 4, md: 6, lg: 8 }}
    >
      <Title>
        Cool Projects <Badge>2017-present</Badge>
      </Title>
      <P>
        Discover these {sections.length} exciting projects, each personally
        crafted by me for both personal experimentation and to assist friends
        with challenging endeavors.
      </P>
      {sections}
    </Container>
  </Layout>
)

export default ExperienceCoolProjects
