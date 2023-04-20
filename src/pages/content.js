import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// Content thumbnails
import thumb_2020_10_23_PythonTkinterGUI from '../public/images/content/2020_10_23_PythonTkinterGUI.png'
import thumb_2021_01_15_PythonVirtualEnvironments from '../public/images/content/2021_01_15_PythonVirtualEnvironments.png'
import thumb_2021_02_01_Flask_Frontend_and_Backend from '../public/images/content/2021_02_01_Flask_Frontend_and_Backend.png'
import thumb_2021_04_09_Practicas_DevOps_General from '../public/images/content/2021_04_09_Practicas_DevOps_General.png'
import thumb_2023_04_Video_Tutorial_CDK_1_Lambda from '../public/images/content/2023_04_Video_Tutorial_CDK_1_Lambda.png'

// End page thumbnails
import thumbYouTube from '../public/images/home/thumbnail_san99tiago_youtube.png'
import thumbGitHub from '../public/images/home/thumbnail_san99tiago_github.png'
import thumbLinkedin from '../public/images/home/thumbnail_san99tiago_linkedin.png'
import thumbInstagram from '../public/images/home/thumbnail_san99tiago_instagram.png'


const Content = () => (
    <Layout title="Content">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Latest Content
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Tutorial AWS CDK Nivel 1: Despliegue de AWS LAMBDA con Infrastructura como Código (IaC)"
                        thumbnail={thumb_2023_04_Video_Tutorial_CDK_1_Lambda}
                        href="https://youtu.be/q9qkCpXLlGE"
                    />
                    <GridItem
                        title="YouTube Playlist: Prácticas DevOps (11 Videos)"
                        thumbnail={thumb_2021_04_09_Practicas_DevOps_General}
                        href="https://www.youtube.com/playlist?list=PLyTv82e1M2ifx3zHOrurVDdNUf9UzPxhx"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Aplicación Sencilla de FLASK (Python) con Frontend y Backend"
                        thumbnail={thumb_2021_02_01_Flask_Frontend_and_Backend}
                        href="https://youtu.be/7fNBL_HBwnM"
                    />
                    <GridItem
                        title="Virtual Environments in PYTHON: Explained and Real Example [English]"
                        thumbnail={thumb_2021_01_15_PythonVirtualEnvironments}
                        href="https://youtu.be/OtOIAWM9B3I"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.7}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Creación de Interfaces MULTI-PÁGINA con Tkinter en Python"
                        thumbnail={thumb_2020_10_23_PythonTkinterGUI}
                        href="https://youtu.be/PJAdd9GujeA"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    Find Out More
                </Heading>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.youtube.com/@san99tiago"
                        title="Santiago Garcia Arango Tech"
                        alt="YouTube Santiago Garcia Arango"
                        thumbnail={thumbYouTube}
                        >
                        DevOps and AWS Tutorials!
                    </GridItem>
                    <GridItem
                        href="https://github.com/san99tiago"
                        title="GitHub san99tiago"
                        alt="GitHub san99tiago"
                        thumbnail={thumbGitHub}
                        >
                        Open Source projects!
                    </GridItem>
                    <GridItem
                        href="https://www.linkedin.com/in/san99tiago/"
                        title="LinkedIn san99tiago"
                        alt="LinkedIn san99tiago"
                        thumbnail={thumbLinkedin}
                        >
                    </GridItem>
                    <GridItem
                        href="https://instagram.com/san99tiago"
                        title="Instagram san99tiago"
                        alt="Instagram san99tiago"
                        thumbnail={thumbInstagram}
                    >
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Content
