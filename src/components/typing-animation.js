import { Box, Text } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const TypingAnimation = ({ lines, typingSpeed = 50, pauseDuration = 2000 }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentLine = lines[currentLineIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    if (!isDeleting && displayedText.length < currentLine.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(typingTimeout)
    }

    if (!isDeleting && displayedText.length === currentLine.length) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayedText.length > 0) {
      const deletingTimeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
      }, typingSpeed / 2)
      return () => clearTimeout(deletingTimeout)
    }

    if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
      setCurrentLineIndex(prevIndex => (prevIndex + 1) % lines.length)
    }
  }, [
    displayedText,
    isDeleting,
    isPaused,
    currentLineIndex,
    lines,
    typingSpeed,
    pauseDuration
  ])

  return (
    <Box
      borderRadius="lg"
      mb={6}
      p={3}
      textAlign="center"
      bg="whiteAlpha.200"
      css={{ backdropFilter: 'blur(10px)' }}
      minH="60px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontSize={{ base: 'sm', md: 'md' }}
        fontFamily="'Fira Code', monospace"
        color="#0CF474"
        fontWeight="medium"
      >
        {displayedText}
        <Box
          as="span"
          display="inline-block"
          w="2px"
          h="1em"
          bg="#0CF474"
          ml={1}
          animation="blink 1s step-end infinite"
          css={{
            '@keyframes blink': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0 }
            }
          }}
        />
      </Text>
    </Box>
  )
}

export default TypingAnimation
