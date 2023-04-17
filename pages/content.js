import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbContent1 from '../public/images/content/content1.png'
import thumbContent2 from '../public/images/content/content1.png'
import thumbContent3 from '../public/images/content/content1.png'

const Content = () => (
    <Layout title="Content">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Content (TODO)
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Content 1 (TODO)"
                        thumbnail={thumbContent1}
                        href="https://github.com/san99tiago/aws-cdk-hello-world"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Content 2 (TODO)"
                        thumbnail={thumbContent2}
                        href="https://github.com/san99tiago/aws-cdk-hello-world"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.5}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Content 3 (TODO)"
                        thumbnail={thumbContent3}
                        href="https://github.com/san99tiago/aws-cdk-hello-world"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Content
