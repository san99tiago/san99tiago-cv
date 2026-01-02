import { Container, Heading, Button, Box, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoYoutube,
  IoMail
} from 'react-icons/io5'

const Contact = () => (
  <Layout title="Contact">
    <Container
      maxW={{ base: '100%', md: '80%', lg: '70%', xl: '60%' }}
      px={{ base: 4, md: 6, lg: 8 }}
    >
      <Heading as="h3" fontSize={20} mb={4}>
        Contact Me
      </Heading>

      <Box>
        <Box mb={4}>
          <Link href="mailto:san99tiago@gmail.com" target="_blank">
            <Button variant="ghost" colorPalette="teal">
              <IoMail style={{ marginRight: '8px' }} />
              Mail: san99tiago@gmail.com
            </Button>
          </Link>
        </Box>
        <Box mb={4}>
          <Link href="https://www.youtube.com/@san99tiago" target="_blank">
            <Button variant="ghost" colorPalette="teal">
              <IoLogoYoutube style={{ marginRight: '8px' }} />
              YouTube: @san99tiago
            </Button>
          </Link>
        </Box>
        <Box mb={4}>
          <Link href="https://github.com/san99tiago" target="_blank">
            <Button variant="ghost" colorPalette="teal">
              <IoLogoGithub style={{ marginRight: '8px' }} />
              GitHub: @san99tiago
            </Button>
          </Link>
        </Box>
        <Box mb={4}>
          <Link href="https://www.linkedin.com/in/san99tiago/" target="_blank">
            <Button variant="ghost" colorPalette="teal">
              <IoLogoLinkedin style={{ marginRight: '8px' }} />
              LinkedIn: @san99tiago
            </Button>
          </Link>
        </Box>
        <Box mb={4}>
          <Link href="https://instagram.com/san99tiago" target="_blank">
            <Button variant="ghost" colorPalette="teal">
              <IoLogoInstagram style={{ marginRight: '8px' }} />
              Instagram: @san99tiago
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="whiteAlpha.500"
        css={{ backdropFilter: 'blur(10px)' }}
      >
        I would love to connect and discuss about tech!
      </Box>
    </Container>
  </Layout>
)

export default Contact
