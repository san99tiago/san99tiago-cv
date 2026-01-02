# Design Document: CV Modernization Update

## Overview

This design outlines the comprehensive modernization of Santiago García Arango's personal CV website. The project involves three main areas: dependency updates to latest stable versions, implementation of testing infrastructure, and content updates reflecting current professional status as Solutions Architect at AWS.

The approach prioritizes maintaining existing functionality while leveraging modern React/Next.js features and ensuring robust testing coverage.

## Architecture

### Current Architecture

- **Frontend Framework**: Next.js 13.3.0 with React 18.2.0
- **UI Library**: Chakra UI v2.5.5
- **Styling**: Emotion-based CSS-in-JS
- **Build System**: Next.js built-in Webpack
- **Deployment**: Static export to AWS S3/CloudFront

### Target Architecture

- **Frontend Framework**: Next.js 15.1+ with React 19
- **UI Library**: Chakra UI v3.x
- **Styling**: Enhanced Emotion with CSS color-mix
- **Build System**: Next.js with Turbopack (stable)
- **Testing**: Jest + React Testing Library
- **Deployment**: Maintained static export compatibility

## Components and Interfaces

### Dependency Migration Strategy

**Next.js Migration (13.3.0 → 15.1+)**

- Leverage React 19 stable support
- Utilize improved error debugging and source maps
- Adopt Turbopack for enhanced performance
- Maintain Pages Router compatibility (no App Router migration required)

**React Migration (18.2.0 → 19.x)**

- Benefit from sibling pre-warming optimizations
- Maintain existing component patterns
- Ensure backward compatibility with current component structure

**Chakra UI Migration (v2.5.5 → v3.x)**

- Update component API changes (colorScheme → colorPalette)
- Migrate boolean props (isX → x pattern)
- Replace removed components (CircularProgress, StackDivider)
- Update ChakraProvider configuration
- Adopt new gradient prop syntax
- Implement CSS color-mix for transparency

### Component Update Patterns

**Provider Updates**

```javascript
// Before (v2)
<ChakraProvider theme={theme}>

// After (v3)
<ChakraProvider value={system}>
```

**Color Palette Updates**

```javascript
// Before
colorScheme = "teal";

// After
colorPalette = "teal";
```

**Boolean Props Updates**

```javascript
// Before
isDisabled={true}

// After
disabled={true}
```

### Testing Infrastructure

**Unit Testing Framework**

- **Primary**: Jest with React Testing Library
- **Coverage**: Component rendering, prop handling, navigation
- **Scope**: Core components (Layout, Navigation, Grid Items, Bio sections)

**Test Categories**

1. **Compilation Tests**: Verify all components compile without errors
2. **Rendering Tests**: Ensure components render with expected content
3. **Navigation Tests**: Validate internal and external links
4. **Responsive Tests**: Check responsive behavior of key components

## Data Models

### Content Structure Updates

**Professional Information Model**

```javascript
const professionalInfo = {
  currentRole: "Solutions Architect at AWS",
  certifications: "10x AWS Certifications",
  heading: "Solutions Architect at AWS | AWS UG Leader | GenAI Enthusiast",
  awsExperience: {
    role: "Solutions Architect",
    company: "Amazon Web Services",
    startDate: "2024-11",
    responsibilities: [
      "Advanced Cloud-Based architectures on AWS",
      "Top FSI Clients over LATAM",
      "Leading Generative AI adoption",
      "CORE migrations",
      "Serverless architectures",
      "Cloud and AI strategies (technical/business levels)",
    ],
    image: "2024_11_25_experience_aws.png",
  },
};
```

**Content Additions Model**

```javascript
const newContent = [
  {
    title: "WhatsApp Chatbot with GenAI on AWS",
    url: "https://youtu.be/9LMtXSYBZ-c",
    image: "2024_11_06_YouTube_Banner_Chatbot_WhatsApp_AWS.png",
    type: "video",
  },
  {
    title: "Lo Nuevo de IA Generativa con AWS - Agentes, MCP, A2A, AgentCore",
    url: "https://youtu.be/YGnyLX_ItIM",
    image: "2025_07_19_YouTube_Banner_IA_Generativa_Recap_AWS_UGMed.png",
    type: "video",
  },
];
```

### File Structure Enhancements

**New Directory Structure**

```
src/
├── __tests__/           # New testing directory
│   ├── components/      # Component tests
│   ├── pages/          # Page tests
│   └── utils/          # Utility tests
├── components/         # Existing components (updated)
├── pages/             # Existing pages (updated)
└── ...

changelog/             # New changelog directory
└── CONTENT_CHANGES.md # Detailed change documentation
```

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

Let me analyze the acceptance criteria to determine testable properties:

<function_calls>
<invoke name="prework">
<parameter name="featureName">cv-modernization-update

Based on the prework analysis, I can now define the testable correctness properties:

### Property Reflection

After reviewing the prework analysis, I identified several properties that can be consolidated:

- Multiple content validation properties can be grouped by type (dependency versions, content updates, file structure)
- Component rendering properties can be unified into broader compatibility checks
- Several example-based tests are actually better suited as comprehensive property tests

### Correctness Properties

Property 1: Component Compatibility Preservation
_For any_ existing React component in the CV website, after dependency updates, the component should render without errors and maintain its original functionality
**Validates: Requirements 1.4, 1.6**

Property 2: Component Rendering Validation  
_For any_ core component (Layout, Navigation, Bio, GridItem), when rendered in tests, the component should successfully mount and display expected content
**Validates: Requirements 2.3**

Property 3: Content Consistency Across Pages
_For any_ page in the website, styling patterns and navigation elements should be consistent with the established design system
**Validates: Requirements 6.4**

## Error Handling

### Dependency Update Error Handling

- **Migration Failures**: Implement rollback strategy if dependency updates cause compilation errors
- **Component Breaking Changes**: Maintain compatibility shims for critical component API changes
- **Build Process Failures**: Ensure graceful degradation and clear error messaging

### Content Update Error Handling

- **Missing Images**: Implement fallback images for new content references
- **Broken Links**: Validate all external URLs before deployment
- **Content Validation**: Ensure all required content fields are present and properly formatted

### Testing Error Handling

- **Test Failures**: Implement clear reporting for test failures with actionable error messages
- **Coverage Gaps**: Identify and report missing test coverage for critical components
- **Performance Regressions**: Monitor build times and bundle sizes for performance impacts

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit tests and property-based tests for comprehensive coverage:

**Unit Tests**:

- Verify specific examples and edge cases
- Test component rendering with specific props
- Validate navigation and link functionality
- Check responsive behavior at specific breakpoints

**Property-Based Tests**:

- Verify universal properties across all components
- Test component compatibility after dependency updates
- Validate content consistency patterns
- Ensure build process reliability

### Testing Framework Configuration

- **Primary Framework**: Jest 29.x with React Testing Library
- **Property Testing**: Custom property test utilities built on Jest
- **Test Execution**: Minimum 100 iterations per property test
- **Coverage Target**: 80% coverage for core components
- **Performance**: Tests should complete within 30 seconds

### Test Organization

```
src/__tests__/
├── components/
│   ├── Layout.test.js
│   ├── Navigation.test.js
│   ├── Bio.test.js
│   └── GridItem.test.js
├── pages/
│   ├── index.test.js
│   ├── experience.test.js
│   └── content.test.js
├── properties/
│   ├── component-compatibility.test.js
│   ├── content-consistency.test.js
│   └── rendering-validation.test.js
└── utils/
    ├── test-helpers.js
    └── property-generators.js
```

### Property Test Tags

Each property test must include a comment tag referencing the design document:

- **Feature: cv-modernization-update, Property 1**: Component Compatibility Preservation
- **Feature: cv-modernization-update, Property 2**: Component Rendering Validation
- **Feature: cv-modernization-update, Property 3**: Content Consistency Across Pages

### Test Execution Strategy

1. **Pre-update Baseline**: Run all tests before dependency updates to establish baseline
2. **Incremental Testing**: Test after each major dependency update
3. **Content Validation**: Test content updates independently from dependency updates
4. **Integration Testing**: Final comprehensive test suite after all changes
5. **Performance Monitoring**: Track build times and bundle sizes throughout updates
