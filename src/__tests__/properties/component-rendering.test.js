/**
 * Property-Based Test: Component Rendering Validation
 * Feature: cv-modernization-update, Property 2: Component Rendering Validation
 * Validates: Requirements 2.3
 *
 * Property: For any core component (Layout, Navigation, Bio, GridItem),
 * when rendered in tests, the component should successfully mount
 * and display expected content.
 */

import React from 'react'
import { render } from '@testing-library/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

// Mock next/head
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }) => <>{children}</>
}))

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

import Layout from '../../components/layouts/article'
import Main from '../../components/layouts/main'
import Navbar from '../../components/navbar'
import { BioSection, BioYear } from '../../components/bio'
import { GridItem, WorkGridItem } from '../../components/grid-item'

const TestWrapper = ({ children }) => (
  <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
)

const mockThumbnail = {
  src: '/test-image.png',
  height: 200,
  width: 300,
  blurDataURL: 'data:image/png;base64,test'
}

describe('Property 2: Component Rendering Validation', () => {
  /**
   * Property: For any core component, it should successfully mount
   * without throwing errors and render its container element.
   */

  const coreComponents = [
    {
      name: 'Layout (Article)',
      component: (
        <Layout title="Test">
          <div>Content</div>
        </Layout>
      ),
      expectedElement: 'article'
    },
    {
      name: 'Main Layout',
      component: (
        <Main router={{ asPath: '/' }}>
          <div>Content</div>
        </Main>
      ),
      expectedElement: 'main'
    },
    {
      name: 'Navbar',
      component: <Navbar path="/" />,
      expectedElement: 'nav'
    },
    {
      name: 'BioSection',
      component: <BioSection>Bio content</BioSection>,
      expectedElement: null
    },
    {
      name: 'BioYear',
      component: <BioYear>2024</BioYear>,
      expectedElement: 'span'
    },
    {
      name: 'GridItem',
      component: (
        <GridItem
          href="https://test.com"
          title="Test"
          thumbnail={mockThumbnail}
        >
          Description
        </GridItem>
      ),
      expectedElement: null
    },
    {
      name: 'WorkGridItem',
      component: (
        <WorkGridItem id="test" title="Test" thumbnail={mockThumbnail}>
          Description
        </WorkGridItem>
      ),
      expectedElement: null
    }
  ]

  test('Property: All core components render without errors', () => {
    coreComponents.forEach(({ name, component }) => {
      expect(() => {
        render(<TestWrapper>{component}</TestWrapper>)
      }).not.toThrow()
    })
  })

  test('Property: All core components produce non-empty output', () => {
    coreComponents.forEach(({ name, component }) => {
      const { container } = render(<TestWrapper>{component}</TestWrapper>)
      expect(container.firstChild).toBeTruthy()
    })
  })

  test('Property: Components with expected elements render correct structure', () => {
    coreComponents
      .filter(({ expectedElement }) => expectedElement !== null)
      .forEach(({ name, component, expectedElement }) => {
        const { container } = render(<TestWrapper>{component}</TestWrapper>)
        expect(container.querySelector(expectedElement)).toBeTruthy()
      })
  })

  test('Property: Components do not trigger error boundaries', () => {
    coreComponents.forEach(({ name, component }) => {
      const { container } = render(<TestWrapper>{component}</TestWrapper>)
      expect(
        container.querySelector('[data-testid="error-boundary"]')
      ).toBeFalsy()
    })
  })

  test('Property: Components maintain consistent rendering across multiple renders', () => {
    coreComponents.forEach(({ name, component }) => {
      const render1 = render(<TestWrapper>{component}</TestWrapper>)
      const render2 = render(<TestWrapper>{component}</TestWrapper>)

      expect(!!render1.container.firstChild).toBe(
        !!render2.container.firstChild
      )
    })
  })
})
