import { Box } from '@chakra-ui/react'
import Section from './section'

const Footer = () => {
    return (
        <Section>
            <Box align="center" opacity={0.4} fontSize="sm">
                “Discipline will sooner or later defeat intelligence”
                ― Japanese Proverb
            </Box>
            <Box align="center" opacity={0.4} fontSize="sm">
                Copyright 2023 Santiago Garcia Arango
            </Box>
        </Section>
    )
}

export default Footer