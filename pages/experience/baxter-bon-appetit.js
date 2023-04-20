import {
    AspectRatio,
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


const ExperienceBaxterBonAppetit = () => (
    <Layout title="Baxter Bon Appetit">
        <Container>
            <Title>
                Baxter Bon Appetit <Badge>2021-2022</Badge>
            </Title>
            <P>
                My University thesis project (in collaboration with Elkin Guerra Galeano) to become a Mechatronics Engineer.
            </P>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Baxter Bon Appetit
                </Heading>
                <AspectRatio maxW="640px" ratio={1.7} my={4}>
                    <iframe
                        src="https://www.youtube.com/embed/sj38y_YvSDM?list=PLyTv82e1M2ifvfXrC5Xpg1bqUKb3822X4"
                        title="Baxter Bon Appetit (Assisted Robotics for Feeding Individuals) - Highlights - Universidad EIA [2021]"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </AspectRatio>
                <ExperienceSection>
                    <ExperienceEmphasis>Title</ExperienceEmphasis>
                    Assisted Robotics for Feeding Individuals with Upper Limb Disabilities.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeGreen>Technologies</BadgeGreen></BadgeStyle>
                    ROS, Baxter-Robot, Python, Matlab, Robotics, Computer-Vision, Control-Theory, Dynamics, Machine-Learning.
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>Publication</BadgeYellow></BadgeStyle>
                    <Link
                        href="https://repository.eia.edu.co/handle/11190/4238"
                        target='_blank'
                        >
                        Official Publication EIA University<ExternalLinkIcon mx="2px" />
                    </Link>
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>Source Code</BadgeYellow></BadgeStyle>
                    <Link
                        href="https://github.com/san99tiago/baxter-bon-appetit"
                        target='_blank'
                        >
                        https://github.com/san99tiago/baxter-bon-appetit<ExternalLinkIcon mx="2px" />
                    </Link>
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>LaTex PDF</BadgeYellow></BadgeStyle>
                    <Link
                        href="https://github.com/san99tiago/baxter-bon-appetit-thesis-latex"
                        target='_blank'
                        >
                        https://github.com/san99tiago/baxter-bon-appetit-thesis-latex<ExternalLinkIcon mx="2px" />
                    </Link>
                </ExperienceSection>
                <ExperienceSection>
                    <BadgeStyle><BadgeYellow>3D Spoon</BadgeYellow></BadgeStyle>
                    <Link
                        href="https://grabcad.com/library/baxter-s-special-spoon-1"
                        target='_blank'
                        >
                        GrabCad 3D Spoon<ExternalLinkIcon mx="2px" />
                    </Link>
                </ExperienceSection>
                <ExperienceSection>
                    <ExperienceEmphasis>Abstract</ExperienceEmphasis>
                    The exponential growth of technology has made it possible to achieve new solutions to improve human beings' quality of life. One of the areas that have experienced the greatest development in the last 20 years is robotics and its derivatives. Currently, there has been a significant increase in the number of people with motor disabilities in the upper limbs, including more than 10 million people with Parkinson's disease and several individuals who, due to other circumstances, have lost the mobility of their upper limbs. This group of people not only have major difficulties in the daily task of feeding but can also experience severe problems of malnutrition and loss of self-esteem. This is why, in this project, exploratory research will be conducted focused on the development of an active robotic solution, using Baxter Robot, which can give support in the feeding process for these individuals and, at the same time, has conditions of improvement compared to the robotic alternatives that exist in the current market. This development will seek a positive impact for all individuals who fit within the exposed problem and a design methodology will be carried out, oriented to the search for a scalable solution, with the ability to recognize the position of the mouth of individuals through Computer Vision algorithms and with the advantage of being Open Source. It is expected that, at the end of this research, relevant advances will be generated in the development of active robotic solutions for the assistance of this population and the scientific knowledge of robotics in Colombia and the world.
                </ExperienceSection>
            </Section>

        </Container>
    </Layout>
)

export default ExperienceBaxterBonAppetit
