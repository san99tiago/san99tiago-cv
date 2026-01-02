import NextLink from 'next/link'
import NextImage from 'next/image'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRight } from 'lucide-react'
import styled from '@emotion/styled'

export const Title = ({ children }) => (
  <Box>
    <Link
      as={NextLink}
      href="/experience"
      color="teal.300"
      _hover={{ color: 'teal.500' }}
    >
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

  /* Style links inside experience sections */
  a {
    color: #4fd1c5;
    text-decoration: none;
    text-indent: 0;
    display: inline;
    &:hover {
      color: #38b2ac;
      text-decoration: underline;
    }
  }
`
export const ExperienceSubSection = styled(Box)`
  padding-left: 2.5em;
  text-indent: 0;
  text-align: justify;
  margin-top: 0.3em;

  /* Style links inside experience sub-sections */
  a {
    color: #4fd1c5;
    text-decoration: none;
    &:hover {
      color: #38b2ac;
      text-decoration: underline;
    }
  }

  /* Add bullet before content */
  &::before {
    content: '•';
    margin-right: 0.5em;
  }
`

export const ExperienceEmphasis = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
// This is to avoid the badges padding superposition and moving to left
export const BadgeStyle = styled.span`
  display: inline-block;
  padding-left: 0em;
  text-indent: 0em;
  margin-right: 0.5em;
`
