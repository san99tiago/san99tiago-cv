import { Box } from '@chakra-ui/react'
import Section from './section'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Section>
      <Box align="center" opacity={0.4} fontSize="sm">
        “Discipline will sooner or later defeat intelligence” ― Japanese Proverb
      </Box>
      <Box align="center" opacity={0.4} fontSize="sm">
        Copyright {currentYear} Santiago Garcia Arango
      </Box>
    </Section>
  )
}

export default Footer
