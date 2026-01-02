import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`

const Logo = () => {
  return (
    <Link
      href="/"
      // scroll={false}
    >
      <LogoBox>
        <Text
          color="gray.800"
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          @san99tiago
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
