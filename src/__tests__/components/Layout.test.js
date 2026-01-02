/**
 * Layout Component Tests
 * Feature: cv-modernization-update
 * Validates: Requirements 2.1, 2.3
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

// Mock next/head
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => <>{children}</>
  }
})

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: () => ({ asPath: '/' })
}))

import Layout from '../../components/layouts/article'
import Main from '../../components/layouts/main'

const TestWrapper = ({ children }) => (
  <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
)

describe('Layout Components', () => {
  describe('Article Layout', () => {
    test('renders without errors', () => {
      const { container } = render(
        <TestWrapper>
          <Layout title="Test Page">
            <div>Test Content</div>
          </Layout>
        </TestWrapper>
      )
      expect(container.querySelector('article')).toBeTruthy()
    })

    test('renders children content', () => {
      render(
        <TestWrapper>
          <Layout title="Test Page">
            <div data-testid="child-content">Child Content</div>
          </Layout>
        </TestWrapper>
      )
      expect(screen.getByTestId('child-content')).toBeInTheDocument()
    })

    test('renders with title prop', () => {
      const { container } = render(
        <TestWrapper>
          <Layout title="My Test Title">
            <div>Content</div>
          </Layout>
        </TestWrapper>
      )
      expect(container.querySelector('article')).toBeTruthy()
    })
  })

  describe('Main Layout', () => {
    const mockRouter = { asPath: '/' }

    test('renders without errors', () => {
      const { container } = render(
        <TestWrapper>
          <Main router={mockRouter}>
            <div>Main Content</div>
          </Main>
        </TestWrapper>
      )
      expect(container.querySelector('main')).toBeTruthy()
    })

    test('renders children content', () => {
      render(
        <TestWrapper>
          <Main router={mockRouter}>
            <div data-testid="main-child">Main Child Content</div>
          </Main>
        </TestWrapper>
      )
      expect(screen.getByTestId('main-child')).toBeInTheDocument()
    })

    test('renders navigation component', () => {
      const { container } = render(
        <TestWrapper>
          <Main router={mockRouter}>
            <div>Content</div>
          </Main>
        </TestWrapper>
      )
      expect(container.querySelector('nav')).toBeTruthy()
    })
  })
})
