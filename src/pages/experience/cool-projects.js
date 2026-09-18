import { Badge, Container, Heading, Link, Box, Input } from '@chakra-ui/react'
import { useState, useMemo } from 'react'

import { ExternalLink, Search } from 'lucide-react'
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

const ExperienceCoolProjects = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter projects based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) {
      return DataJson
    }

    const query = searchQuery.toLowerCase()
    return DataJson.filter(project => {
      const titleMatch = project.title.toLowerCase().includes(query)
      const descriptionMatch = project.description.toLowerCase().includes(query)
      const technologiesMatch = project.technologies
        .toLowerCase()
        .includes(query)
      return titleMatch || descriptionMatch || technologiesMatch
    })
  }, [searchQuery])

  // Generate sections from filtered projects
  const sections = filteredProjects.map(project => (
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
  ))

  return (
    <Layout title="Cool Projects">
      <Container
        maxW={{ base: '100%', md: '80%', lg: '70%', xl: '60%' }}
        px={{ base: 4, md: 6, lg: 8 }}
      >
        <Title>
          Cool Projects <Badge>2017-present</Badge>
        </Title>
        <P>
          Discover these {DataJson.length} exciting projects, each personally
          crafted by me for both personal experimentation and to assist friends
          with challenging endeavors.
        </P>

        <Box my={6} position="relative">
          <Box position="absolute" left={3} top="50%" transform="translateY(-50%)" zIndex={1} pointerEvents="none">
            <Search size={18} color="gray" />
          </Box>
          <Input
            placeholder="Search projects by title, description, or technologies..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            size="md"
            pl={10}
            borderRadius="md"
            borderColor="gray.300"
            _hover={{ borderColor: 'teal.400' }}
            _focus={{ borderColor: 'teal.500', boxShadow: '0 0 0 1px teal.500' }}
          />
        </Box>

        {searchQuery && (
          <P mb={4}>
            Showing {filteredProjects.length} of {DataJson.length} projects
          </P>
        )}

        {filteredProjects.length === 0 ? (
          <Box my={8} textAlign="center" color="gray.500">
            <P>No projects found matching &quot;{searchQuery}&quot;</P>
            <P mt={2}>Try different keywords or technologies</P>
          </Box>
        ) : (
          sections
        )}
      </Container>
    </Layout>
  )
}

export default ExperienceCoolProjects
