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


// Load sections data form external JSON and load them to "sections" list
const sections = []
for (let i = 0; i < DataJson.length; i++) {
    const project = DataJson[i]
    sections.push(
        <Section delay={0.1} key={project.title}>
            <Heading as='h3' variant='section-title'>
                {project.title}
            </Heading>
            <ExperienceSection>
                <ExperienceEmphasis>Description</ExperienceEmphasis>
                {project.description}
            </ExperienceSection>
            <ExperienceSection>
                <BadgeStyle><BadgeGreen>Technologies</BadgeGreen></BadgeStyle>
                {project.technologies}
            </ExperienceSection>
            <ExperienceSection>
                <BadgeStyle><BadgeYellow>Source Code</BadgeYellow></BadgeStyle>
                <Link href={project.url} target='_blank'>
                    {project.url}<ExternalLinkIcon mx='2px' />
                </Link>
            </ExperienceSection>
        </Section>
    )
}


const ExperienceCoolProjects = () => (
    <Layout title='Cool Projects'>
        <Container>
            <Title>
                Cool Projects <Badge>2017-present</Badge>
            </Title>
            <P>
                Cool Projects for personal experiments or for helping friends that have asked me to develop something challenging for them.
            </P>
            {sections}
        </Container>
    </Layout>
)

export default ExperienceCoolProjects
