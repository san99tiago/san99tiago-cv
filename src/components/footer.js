import { Box } from '@chakra-ui/react'
import Section from './section'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Box display="flex" w="100%" justifyContent="center">
      <Box w={{ base: '100%', md: '80%', lg: '70%', xl: '60%' }}>
        <Section>
          <Box align="center" opacity={0.4} fontSize="sm">
            "Discipline will sooner or later defeat intelligence" ― Japanese
            Proverb
          </Box>
          <Box align="center" opacity={0.4} fontSize="sm">
            Copyright {currentYear} Santiago Garcia Arango
          </Box>
        </Section>
      </Box>
    </Box>
  )
}

export default Footer
