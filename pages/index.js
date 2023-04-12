import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
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
                Hello, I&apos;m an DevOps Engineer based in Colombia!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Santiago Garcia
                    </Heading>
                    {/* <p>Digital Craftsman ( Artist / Developer / Designer )</p> */}
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
                            src="/images/santiago.jfif"
                            alt="Profile image"
                            borderRadius="full"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I am a curious Mechatronics Engineer excited about creating software solutions. I'm currently exploring DevSecOps, advanced AWS architectures, and diving into Kubernetes.

                    Likewise, I have skills leading and working in teams, and I'm passionate about sharing my knowledge and learning the art of how everything actually works.

                    Not only that, but I'm also a dreamer of a better future thanks to technology.{' '}

                    . Check my YouTube;
                    <Link
                        as={NextLink}
                        href="https://www.youtube.com/@san99tiago"
                        passHref
                        target="_blank"
                    >
                        Dev as Life
                    </Link>
                    &quot; has more than 100k subscribers.
                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        My portfolio
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1999</BioYear>
                    Born in Medellín, Colombia.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Completed the Bachelor&apos;s Program in Mechatronic&apos;s Engieneering at EIA University
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Worked at Pragma as DevOps Engineer
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Working at Bancolombia as Software Engineering Specialist
                    Senior Systems Engineer (DevOps)
                </BioSection>
                <BioSection>
                    <BioYear>2022 to present</BioYear>
                    Senior Systems Engineer (DevOps)
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Art, Music, Learning, DevOps, Cybersecurity
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/san99tiago" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @san99tiago
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/san99tiago" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @san99tiago
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://instagram.com/san99tiago" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @san99tiago
                            </Button>
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.youtube.com/@san99tiago"
                        title="Santiago Garcia Arango Tech"
                        thumbnail={thumbYouTube}
                    >
                        My YouTube channel
                    </GridItem>
                    <GridItem
                        href="https://www.inkdrop.app/"
                        title="Inkdrop"
                        thumbnail={thumbInkdrop}
                    >
                        Que ponemos aquí...
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Home
