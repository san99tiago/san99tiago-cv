import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbExperienceX from '../public/images/experience/experience_x/example_01.png'


const Experience = () => (
    <Layout title="Experience">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Work Experience
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="experience-x"
                        title="Experience X"
                        thumbnail={thumbExperienceX}
                    >
                        Experience X
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="experience-x"
                        title="Experience X"
                        thumbnail={thumbExperienceX}
                    >
                        Experience X
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="experience-x"
                        title="Experience X"
                        thumbnail={thumbExperienceX}
                    >
                        Experience X
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem
                        id="experience-x"
                        title="Experience X"
                        thumbnail={thumbExperienceX}
                    >
                        Experience X
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.4}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Other Cool Stuff
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.5}>
                    <WorkGridItem
                        id="experience-x"
                        title="Experience X"
                        thumbnail={thumbExperienceX}
                    >
                        Experience X
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Experience
