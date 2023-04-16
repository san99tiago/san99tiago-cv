import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelInfinityLoader from '../voxel-infinity-loader'

/* const LazyVoxelInfinity = dynamic(() => import('../voxel-infinity'), {
    ssr: false,
    loading: () => <VoxelInfinityLoader />
}) */

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Santiago's homepage" />
                <meta name="author" content="Santiago Garcia" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:title" content="Santiago Garcia" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@san99tiago" />
                <meta property="og:site_name" content="Santiago Garcia" />
                <meta name="og:title" content="Santiago Garcia" />
                <meta property="og:type" content="website" />
                <title>Santiago's CV</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {/* <LazyVoxelInfinity /> */}

                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main