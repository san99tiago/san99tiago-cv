import {
    Badge,
    Container,
    Divider,
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
            <Divider my={5} />
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
                Discover these {sections.length} exciting projects, each personally crafted by me for both personal experimentation and to assist friends with challenging endeavors.
            </P>
            {sections}
        </Container>
    </Layout>
)

export default ExperienceCoolProjects
