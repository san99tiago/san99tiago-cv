import NextLink from 'next/link'
import { Box, Heading, Text, Container, Button } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>Hi friend, the page you&apos;re looking for was not found!</Text>
      <Box height="1px" bg="gray.200" my={6} width="100%" />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorPalette="teal">
          Please, return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
