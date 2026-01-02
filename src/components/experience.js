import NextLink from 'next/link'
import NextImage from 'next/image'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRight } from 'lucide-react'
import styled from '@emotion/styled'

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/experience">
      Experience
    </Link>
    <span>
      {' '}
      <ChevronRight size={16} />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const ExperienceImage = ({ src, alt }) => (
  <NextImage
    src={src}
    alt={alt}
    width={800}
    height={400}
    style={{
      borderRadius: '8px',
      width: '100%',
      height: 'auto',
      marginBottom: '1rem',
      objectFit: 'cover'
    }}
  />
)

export const BadgeGreen = ({ children }) => (
  <Badge colorPalette="green" mr={2}>
    {children}
  </Badge>
)
export const BadgeYellow = ({ children }) => (
  <Badge colorPalette="yellow" mr={2}>
    {children}
  </Badge>
)

export const ExperienceSection = styled(Box)`
  padding-left: 1.5em;
  text-indent: -1.5em;
  text-align: justify;
`
export const ExperienceSubSection = styled(Box)`
  padding-left: 1.8em;
  text-indent: -1.8em;
  text-align: justify;
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
