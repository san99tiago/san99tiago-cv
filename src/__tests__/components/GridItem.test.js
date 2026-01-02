/**
 * GridItem Component Tests
 * Feature: cv-modernization-update
 * Validates: Requirements 2.1, 2.3
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
})

// Mock next/image
jest.mock('next/image', () => {
  return ({ src, alt, ...props }) => (
    <img src={typeof src === 'object' ? src.src : src} alt={alt} {...props} />
  )
})

import {
  GridItem,
  WorkGridItem,
  GridItemStyle
} from '../../components/grid-item'

const TestWrapper = ({ children }) => (
  <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
)

// Mock thumbnail for testing
const mockThumbnail = {
  src: '/test-image.png',
  height: 200,
  width: 300,
  blurDataURL: 'data:image/png;base64,test'
}

describe('GridItem Components', () => {
  describe('GridItem', () => {
    test('renders without errors', () => {
      const { container } = render(
        <TestWrapper>
          <GridItem
            href="https://example.com"
            title="Test Title"
            thumbnail={mockThumbnail}
          >
            Test Description
          </GridItem>
        </TestWrapper>
      )
      expect(container.firstChild).toBeTruthy()
    })

    test('renders title', () => {
      render(
        <TestWrapper>
          <GridItem
            href="https://example.com"
            title="My Grid Title"
            thumbnail={mockThumbnail}
          >
            Description
          </GridItem>
        </TestWrapper>
      )
      expect(screen.getByText('My Grid Title')).toBeInTheDocument()
    })

    test('renders children description', () => {
      render(
        <TestWrapper>
          <GridItem
            href="https://example.com"
            title="Title"
            thumbnail={mockThumbnail}
          >
            My Description Text
          </GridItem>
        </TestWrapper>
      )
      expect(screen.getByText('My Description Text')).toBeInTheDocument()
    })

    test('renders image with alt text', () => {
      render(
        <TestWrapper>
          <GridItem
            href="https://example.com"
            title="Image Title"
            thumbnail={mockThumbnail}
          >
            Description
          </GridItem>
        </TestWrapper>
      )
      expect(screen.getByAltText('Image Title')).toBeInTheDocument()
    })
  })

  describe('WorkGridItem', () => {
    test('renders without errors', () => {
      const { container } = render(
        <TestWrapper>
          <WorkGridItem
            id="test-work"
            title="Work Title"
            thumbnail={mockThumbnail}
          >
            Work Description
          </WorkGridItem>
        </TestWrapper>
      )
      expect(container.firstChild).toBeTruthy()
    })

    test('renders title', () => {
      render(
        <TestWrapper>
          <WorkGridItem
            id="test-work"
            title="My Work Title"
            thumbnail={mockThumbnail}
          >
            Description
          </WorkGridItem>
        </TestWrapper>
      )
      expect(screen.getByText('My Work Title')).toBeInTheDocument()
    })

    test('renders children description', () => {
      render(
        <TestWrapper>
          <WorkGridItem id="test-work" title="Title" thumbnail={mockThumbnail}>
            Work Description Text
          </WorkGridItem>
        </TestWrapper>
      )
      expect(screen.getByText('Work Description Text')).toBeInTheDocument()
    })

    test('renders image with alt text', () => {
      render(
        <TestWrapper>
          <WorkGridItem
            id="test-work"
            title="Work Image Title"
            thumbnail={mockThumbnail}
          >
            Description
          </WorkGridItem>
        </TestWrapper>
      )
      expect(screen.getByAltText('Work Image Title')).toBeInTheDocument()
    })
  })

  describe('GridItemStyle', () => {
    test('renders without errors', () => {
      const { container } = render(
        <TestWrapper>
          <GridItemStyle />
        </TestWrapper>
      )
      expect(container).toBeTruthy()
    })
  })
})
