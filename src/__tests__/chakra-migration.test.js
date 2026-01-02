/**
 * Property-Based Test: Component Compatibility Preservation
 * Feature: cv-modernization-update, Property 1: Component Compatibility Preservation
 * Validates: Requirements 1.4, 1.6
 */

import React from 'react'
import { render } from '@testing-library/react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Button, Badge, IconButton } from '@chakra-ui/react'
import { Sun } from 'lucide-react'

// Test wrapper with ChakraProvider
const TestWrapper = ({ children }) => (
  <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
)

describe('Chakra UI v3 Migration Compatibility', () => {
  test('Button component renders with colorPalette prop', () => {
    const { container } = render(
      <TestWrapper>
        <Button colorPalette="teal">Test Button</Button>
      </TestWrapper>
    )

    expect(container.firstChild).toBeTruthy()
    expect(container.textContent).toContain('Test Button')
  })

  test('Badge component renders with colorPalette prop', () => {
    const { container } = render(
      <TestWrapper>
        <Badge colorPalette="green">Test Badge</Badge>
      </TestWrapper>
    )

    expect(container.firstChild).toBeTruthy()
    expect(container.textContent).toContain('Test Badge')
  })

  test('IconButton component renders with Lucide React icon', () => {
    const { container } = render(
      <TestWrapper>
        <IconButton
          aria-label="Test Icon"
          colorPalette="purple"
          icon={<Sun size={16} />}
        />
      </TestWrapper>
    )

    expect(container.firstChild).toBeTruthy()
    // Check that the button is rendered correctly
    const buttonElement = container.querySelector('button')
    expect(buttonElement).toBeTruthy()
    expect(buttonElement).toHaveAttribute('aria-label', 'Test Icon')
  })

  test('ChakraProvider with defaultSystem works correctly', () => {
    const { container } = render(
      <TestWrapper>
        <div>Provider Test</div>
      </TestWrapper>
    )

    expect(container.textContent).toContain('Provider Test')
  })

  // Property test: For any basic Chakra UI component, it should render without errors after migration
  test('Property: Component compatibility preservation across different components', () => {
    const components = [
      <Button key="btn" colorPalette="teal">
        Button
      </Button>,
      <Badge key="badge" colorPalette="green">
        Badge
      </Badge>,
      <IconButton key="icon" aria-label="Icon" icon={<Sun size={16} />} />
    ]

    components.forEach((component, index) => {
      const { container } = render(<TestWrapper>{component}</TestWrapper>)

      expect(container.firstChild).toBeTruthy()
      // Verify no error boundary was triggered
      expect(
        container.querySelector('[data-testid="error-boundary"]')
      ).toBeFalsy()
    })
  })
})
