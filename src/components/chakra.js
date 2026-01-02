import { ChakraProvider } from '@chakra-ui/react'
import system from '../lib/theme'

export default function Chakra({ cookies, children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}
