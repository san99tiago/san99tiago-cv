import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={200}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto'
        }}
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/experience/${id}`}
      // scroll={false}
      cursor="pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={200}
        className="grid-item-thumbnail"
        placeholder="blur"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: 'auto'
        }}
      />
      <LinkOverlay as="div" href={`/experience/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
