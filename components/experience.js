import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'


export const Title = ({ children }) => (
    <Box>
        <Link as={NextLink} href="/experience">
            Experience
        </Link>
        <span>
            {' '}
            <ChevronRightIcon />{' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const ExperienceImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const BadgeGreen = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)
export const BadgeYellow = ({ children }) => (
    <Badge colorScheme="yellow" mr={2}>
        {children}
    </Badge>
)

export const ExperienceSection = styled(Box)`
    padding-left: 3.4em;
    text-indent: -3.4em;
`

export const ExperienceEmphasis = styled.span`
    font-weight: bold;
    margin-right: 1em;
`
// This is to avoid the badges padding superposition and moving to left
export const BadgeStyle = styled.span`
    padding-left: 0em;
    text-indent: 0em;
`
