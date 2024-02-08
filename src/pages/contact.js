import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListItem,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
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
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Contact Me
      </Heading>

      <List>
        <ListItem>
          <Link href="mailto:san99tiago@gmail.com" target="_blank">
            <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
              Mail: san99tiago@gmail.com
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.youtube.com/@san99tiago" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoYoutube />}
            >
              YouTube: @san99tiago
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/san99tiago" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoGithub />}
            >
              GitHub: @san99tiago
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.linkedin.com/in/san99tiago/" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoLinkedin />}
            >
              LinkedIn: @san99tiago
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
              Instagram: @san99tiago
            </Button>
          </Link>
        </ListItem>
      </List>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        I would love to connect and discuss about tech!
      </Box>
    </Container>
  </Layout>
)

export default Contact
