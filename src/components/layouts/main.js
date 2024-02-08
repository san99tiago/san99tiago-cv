import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Santiago Garcia Arango (san99tiago) portfolio with content, experience and projects."
        />
        <meta name="author" content="Santiago Garcia Arango (san99tiago)" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="github:site" content="@san99tiago" />
        <meta name="instagram:site" content="@san99tiago" />
        <meta name="twitter:title" content="Santiago Garcia Arango" />
        <meta name="twitter:site" content="@san99tiago" />
        <meta property="og:site_name" content="Santiago Garcia Arango" />
        <meta name="og:title" content="Santiago Garcia Arango" />
        <meta property="og:type" content="website" />
        <title>Santiago Garcia Arango</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
