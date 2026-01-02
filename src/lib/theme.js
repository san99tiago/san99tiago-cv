import { createSystem, defaultConfig } from '@chakra-ui/react'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'M PLUS Rounded 1c'" }
      },
      colors: {
        grassTeal: { value: '#88ccca' }
      }
    }
  },
  globalCss: {
    html: {
      colorScheme: 'dark'
    },
    body: {
      bg: '#202023',
      color: 'white'
    }
  }
})

export default system
