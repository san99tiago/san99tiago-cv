import NextLink from 'next/link'
import {
    Box,
    Button,
    Divider,
    Container,
    Heading,
    Link,
    SimpleGrid,
    Text,
    useColorModeValue,
    chakra,
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbYouTube from '../public/images/links/thumbnail_san99tiago_youtube.png'
import thumbGitHub from '../public/images/links/thumbnail_san99tiago_github.png'
import thumbLinkedin from '../public/images/links/thumbnail_san99tiago_linkedin.png'
import thumbInstagram from '../public/images/links/thumbnail_san99tiago_instagram.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
    <Layout>
        <Container>

            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Hey, I love to learn new tech things everyday!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading
                        as="h2"
                        variant="page-title"
                    >
                        Santiago Garcia Arango
                    </Heading>
                    {<p> DevSecOps | AWS Community Builder | Serverless </p>}
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/SantiagoGarciaArango.jfif"
                            alt="Profile image"
                            borderRadius="full"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Box>
                <Text>{``}</Text>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Who Am I?
                </Heading>

                <Paragraph>
                    I am a curious Mechatronics Engineer excited about creating software solutions. I'm currently exploring DevSecOps, advanced AWS architectures, and diving into Kubernetes.
                </Paragraph>

                <Paragraph>
                    Likewise, I have skills leading and working in teams, and I'm passionate about sharing my knowledge and learning the art of how everything actually works.
                </Paragraph>

                <Box>
                    <Text>{'\n'}</Text>
                </Box>

                <Paragraph>
                    Feel free to visit my YouTube channel to find cool tutorials:
                    &quot;
                    <Link
                        as={NextLink}
                        href="https://www.youtube.com/@san99tiago"
                        passHref
                        target="_blank"
                        >
                        Santiago Garcia Arango Tech
                    </Link>
                    &quot; where I upload cool videos about DevOps and AWS.
                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/content"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        Explore my content!
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Technical Tools
                </Heading>
                <BioSection>
                    <BioYear>Coding Languages</BioYear>
                    Python, JavaScript, Golang, TypeScript, Java, Bash Scripting, MATLAB, HTML, CSS, C, Arduino.
                </BioSection>
                <BioSection>
                    <BioYear>Technical</BioYear>
                    Git, Docker, AWS*, Terraform, CDK, Kubernetes, Linux Distributions, SonarQube, Azure DevOps, Jenkins, IBM WAS, IBM MQ, Packer, SQL, No-SQL, MetaSploit, Wireshark, Netcat, IoT, Simulink, LaTex.
                </BioSection>
                <BioSection>
                    <BioYear>Design/Strategies/Patterns</BioYear>
                    TDD, OWASP, Serverless, Event Driven Architectures, Agile-Scrum, Pair Programming, Clean Code, Static Code Analysis, DAST, SAST.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Education
                </Heading>
                <BioSection>
                    <BioYear>2022-present</BioYear>
                    Senior Systems Engineer (DevOps)
                    EPAM Systems
                </BioSection>
                <BioSection>
                    <BioYear>2022-present</BioYear>
                    M.S. Cybersecurity
                    IMF Smart Education
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Software Engineering Specialist (DevOps)
                    Bancolombia
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    DevOps Engineer
                    PRAGMA
                </BioSection>
                <BioSection>
                    <BioYear>2017-2021</BioYear>
                    B.S. Mechatronics Engineering
                    EIA University
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Find Out More
                </Heading>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.youtube.com/@san99tiago"
                        title="Santiago Garcia Arango Tech"
                        thumbnail={thumbYouTube}
                    >
                        DevOps and AWS Tutorials!
                    </GridItem>
                    <GridItem
                        href="https://github.com/san99tiago"
                        title="GitHub san99tiago"
                        thumbnail={thumbGitHub}
                    >
                        Open Source projects!
                    </GridItem>
                    <GridItem
                        href="https://www.linkedin.com/in/san99tiago/"
                        title="LinkedIn san99tiago"
                        thumbnail={thumbLinkedin}
                    >
                    </GridItem>
                    <GridItem
                        href="https://instagram.com/san99tiago"
                        title="Instagram san99tiago"
                        thumbnail={thumbInstagram}
                    >
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Home
