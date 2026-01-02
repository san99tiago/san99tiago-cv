/**
 * Bio Component Tests
 * Feature: cv-modernization-update
 * Validates: Requirements 2.1, 2.3
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BioSection, BioYear } from '../../components/bio'

const TestWrapper = ({ children }) => (
  <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
)

describe('Bio Components', () => {
  describe('BioSection', () => {
    test('renders without errors', () => {
      const { container } = render(
        <TestWrapper>
          <BioSection>Test bio content</BioSection>
        </TestWrapper>
      )
      expect(container.firstChild).toBeTruthy()
    })

    test('renders children content', () => {
      render(
        <TestWrapper>
          <BioSection>
            <span data-testid="bio-content">Bio Content Here</span>
          </BioSection>
        </TestWrapper>
      )
      expect(screen.getByTestId('bio-content')).toBeInTheDocument()
    })

    test('renders text content correctly', () => {
      render(
        <TestWrapper>
          <BioSection>This is my bio text</BioSection>
        </TestWrapper>
      )
      expect(screen.getByText('This is my bio text')).toBeInTheDocument()
    })
  })

  describe('BioYear', () => {
    test('renders without errors', () => {
      const { container } = render(
        <TestWrapper>
          <BioYear>2024</BioYear>
        </TestWrapper>
      )
      expect(container.firstChild).toBeTruthy()
    })

    test('renders year content', () => {
      render(
        <TestWrapper>
          <BioYear>2024</BioYear>
        </TestWrapper>
      )
      expect(screen.getByText('2024')).toBeInTheDocument()
    })

    test('renders as span element', () => {
      const { container } = render(
        <TestWrapper>
          <BioYear>2023</BioYear>
        </TestWrapper>
      )
      expect(container.querySelector('span')).toBeTruthy()
    })
  })

  describe('BioSection with BioYear', () => {
    test('renders combined bio entry', () => {
      render(
        <TestWrapper>
          <BioSection>
            <BioYear>2024</BioYear>
            Started working at AWS
          </BioSection>
        </TestWrapper>
      )
      expect(screen.getByText('2024')).toBeInTheDocument()
      expect(screen.getByText(/Started working at AWS/)).toBeInTheDocument()
    })
  })
})
