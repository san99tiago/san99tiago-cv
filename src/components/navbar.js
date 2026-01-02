import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Link,
  Stack,
  IconButton,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger
} from '@chakra-ui/react'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { HamburgerIcon } from './icons/hamburger'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = 'gray.300'
  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))
MenuLink.displayName = 'forwardRef'

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg="#20202380"
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Box display="flex" p={2} w="100%" justifyContent="center">
        <Box
          display="flex"
          w={{ base: '100%', md: '80%', lg: '70%', xl: '60%' }}
          justifyContent={{ base: 'space-between', md: 'center' }}
          alignItems="center"
          px={{ base: 4, md: 6, lg: 8 }}
        >
          {/* Logo/Brand */}
          <Link
            as={NextLink}
            href="/"
            color="gray.400"
            fontWeight="bold"
            _hover={{ color: 'gray.200', textDecoration: 'none' }}
            mr={{ base: 0, md: 6 }}
          >
            @san99tiago
          </Link>

          {/* Desktop Menu */}
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            gap={6}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/" path={path}>
              About
            </LinkItem>
            <LinkItem href="/content" path={path}>
              Content
            </LinkItem>
            <LinkItem href="/experience" path={path}>
              Experience
            </LinkItem>
            <LinkItem href="/contact" path={path}>
              Contact
            </LinkItem>

            <LinkItem
              target="_blank"
              href="/pdfs/cv-santiago-garcia-arango.pdf"
              locale={'false'}
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoDocumentTextOutline />
              CV
            </LinkItem>
          </Stack>

          {/* Mobile Hamburger Menu */}
          <Box display={{ base: 'flex', md: 'none' }}>
            <DrawerRoot placement="end">
              <DrawerTrigger asChild>
                <IconButton
                  aria-label="Open Menu"
                  variant="ghost"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  <HamburgerIcon />
                </IconButton>
              </DrawerTrigger>
              <DrawerBackdrop />
              <DrawerContent bg="#202023">
                <DrawerCloseTrigger color="white" />
                <DrawerBody pt={12}>
                  <Stack direction="column" gap={4}>
                    <LinkItem href="/" path={path}>
                      About
                    </LinkItem>
                    <LinkItem href="/content" path={path}>
                      Content
                    </LinkItem>
                    <LinkItem href="/experience" path={path}>
                      Experience
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                      Contact
                    </LinkItem>
                    <LinkItem
                      target="_blank"
                      href="/pdfs/cv-santiago-garcia-arango.pdf"
                      locale={'false'}
                      path={path}
                      display="inline-flex"
                      alignItems="center"
                      style={{ gap: 4 }}
                    >
                      <IoDocumentTextOutline />
                      CV
                    </LinkItem>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </DrawerRoot>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
