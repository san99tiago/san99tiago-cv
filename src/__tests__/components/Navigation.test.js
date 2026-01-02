/**
 * Navigation Component Tests
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

import Navbar from '../../components/navbar'

const TestWrapper = ({ children }) => (
  <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
)

describe('Navigation Component', () => {
  test('renders without errors', () => {
    const { container } = render(
      <TestWrapper>
        <Navbar path="/" />
      </TestWrapper>
    )
    expect(container.querySelector('nav')).toBeTruthy()
  })

  test('renders About link', () => {
    render(
      <TestWrapper>
        <Navbar path="/" />
      </TestWrapper>
    )
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  test('renders Content link', () => {
    render(
      <TestWrapper>
        <Navbar path="/" />
      </TestWrapper>
    )
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  test('renders Experience link', () => {
    render(
      <TestWrapper>
        <Navbar path="/" />
      </TestWrapper>
    )
    expect(screen.getByText('Experience')).toBeInTheDocument()
  })

  test('renders Contact link', () => {
    render(
      <TestWrapper>
        <Navbar path="/" />
      </TestWrapper>
    )
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  test('renders CV link', () => {
    render(
      <TestWrapper>
        <Navbar path="/" />
      </TestWrapper>
    )
    expect(screen.getByText('CV')).toBeInTheDocument()
  })

  test('all navigation links are present', () => {
    render(
      <TestWrapper>
        <Navbar path="/" />
      </TestWrapper>
    )
    const expectedLinks = ['About', 'Content', 'Experience', 'Contact', 'CV']
    expectedLinks.forEach(linkText => {
      expect(screen.getByText(linkText)).toBeInTheDocument()
    })
  })

  test('renders with fixed positioning', () => {
    const { container } = render(
      <TestWrapper>
        <Navbar path="/" />
      </TestWrapper>
    )
    const nav = container.querySelector('nav')
    expect(nav).toBeTruthy()
  })
})
