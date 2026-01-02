# Implementation Plan: CV Modernization Update

## Overview

This implementation plan covers the comprehensive modernization of Santiago's CV website, including dependency updates, testing implementation, and content updates reflecting his current role as Solutions Architect at AWS.

## Tasks

- [x] 1. Dependency Modernization Setup

  - Research and identify exact versions for Next.js 15.1+, React 19, and Chakra UI v3
  - Create backup of current package.json and package-lock.json
  - Update package.json with new dependency versions
  - _Requirements: 1.1, 1.2, 1.3_

- [x] 1.1 Validate dependency versions

  - **Property 1: Component Compatibility Preservation**
  - **Validates: Requirements 1.1, 1.2, 1.3**

- [x] 2. Install and Configure Updated Dependencies

  - Run npm install with new dependencies
  - Resolve any peer dependency conflicts
  - Update Next.js configuration for version 15.1+ features
  - Configure Turbopack if available
  - _Requirements: 1.4, 1.5_

- [x] 2.1 Test compilation after dependency updates

  - Verify build process completes without errors
  - **Validates: Requirements 1.5**

- [x] 3. Chakra UI v3 Migration

  - Update ChakraProvider configuration to use system instead of theme
  - Replace colorScheme props with colorPalette throughout components
  - Update boolean props from isX pattern to x pattern
  - Replace any removed components (CircularProgress, StackDivider if used)
  - Update gradient prop syntax if used
  - _Requirements: 1.4, 1.6_

- [x] 3.1 Test component compatibility after Chakra UI migration

  - **Property 1: Component Compatibility Preservation**
  - **Validates: Requirements 1.4, 1.6**

- [x] 4. Testing Infrastructure Setup

  - Install Jest and React Testing Library
  - Create **tests** directory structure
  - Configure Jest configuration file
  - Set up test scripts in package.json
  - Create test utilities and helpers
  - _Requirements: 2.1, 2.2_

- [x] 4.1 Validate testing setup

  - Run initial test suite to ensure framework works
  - **Validates: Requirements 2.2**

- [x] 5. Core Component Unit Tests

  - [x] 5.1 Create Layout component tests

    - Test component renders without errors
    - Test responsive behavior
    - _Requirements: 2.1, 2.3_

  - [x] 5.2 Create Navigation component tests

    - Test all navigation links
    - Test responsive menu behavior
    - _Requirements: 2.1, 2.3_

  - [x] 5.3 Create Bio component tests

    - Test BioSection and BioYear rendering
    - Test content display
    - _Requirements: 2.1, 2.3_

  - [x] 5.4 Create GridItem component tests
    - Test WorkGridItem rendering
    - Test image and link handling
    - _Requirements: 2.1, 2.3_

- [x] 5.5 Property test for component rendering

  - **Property 2: Component Rendering Validation**
  - **Validates: Requirements 2.3**

- [x] 6. Checkpoint - Ensure all tests pass

  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Professional Information Updates

  - [x] 7.1 Update main heading in index.js

    - Change to "Solutions Architect at AWS | AWS UG Leader | GenAI Enthusiast"
    - _Requirements: 3.3_

  - [x] 7.2 Update AWS certifications count

    - Change to "10x AWS Certifications" in AWS Experience section
    - _Requirements: 3.1_

  - [x] 7.3 Update current role description
    - Update professional description to reflect Solutions Architect role
    - _Requirements: 3.2_

- [x] 7.4 Test professional information updates

  - Verify new heading appears correctly
  - Verify certification count is updated
  - **Validates: Requirements 3.1, 3.2, 3.3**

- [x] 8. AWS Work Experience Addition

  - [x] 8.1 Create new AWS experience page

    - Create src/pages/experience/aws.js following template pattern
    - Include role details: advanced Cloud-Based architectures
    - Include client information: top FSI Clients over LATAM
    - Include responsibilities: leading Generative AI adoption
    - Include technical work: CORE migrations, Serverless architectures
    - Include leadership aspects: cloud and AI strategies
    - Include role scope: technical and business level involvement
    - Reference image: "2024_11_25_experience_aws.png"
    - _Requirements: 3.4, 3.5, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

  - [x] 8.2 Update experience.js to include AWS role
    - Add AWS WorkGridItem to Featured section
    - Use appropriate thumbnail and title
    - _Requirements: 3.4, 3.5_

- [x] 8.3 Test AWS experience content

  - Verify AWS role appears in experience page
  - Verify all required content is present
  - **Validates: Requirements 3.4, 3.5, 4.1-4.6**

- [x] 9. New Content Additions

  - [x] 9.1 Add WhatsApp Chatbot content

    - Add to content data with title "WhatsApp Chatbot with GenAI on AWS"
    - Set URL to "https://youtu.be/9LMtXSYBZ-c"
    - Reference image "2024_11_06_YouTube_Banner_Chatbot_WhatsApp_AWS.png"
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 9.2 Add GenAI content

    - Add to content data with title "Lo Nuevo de IA Generativa con AWS - Agentes, MCP, A2A, AgentCore"
    - Set URL to "https://youtu.be/YGnyLX_ItIM"
    - Reference image "2025_07_19_YouTube_Banner_IA_Generativa_Recap_AWS_UGMed.png"
    - _Requirements: 5.4, 5.5, 5.6_

  - [x] 9.3 Update content.js page to display new content
    - Ensure new content appears in appropriate sections
    - Test links and images work correctly
    - _Requirements: 5.1-5.6_

- [x] 9.4 Test new content additions

  - Verify WhatsApp content appears with correct title, link, and image
  - Verify GenAI content appears with correct title, link, and image
  - **Validates: Requirements 5.1-5.6**

- [x] 10. Content Quality Review and Enhancement

  - [x] 10.1 Review all page content for typos and improvements

    - Review index.js content
    - Review experience page descriptions
    - Review content page descriptions
    - Make improvements while maintaining professional tone
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 10.2 Ensure content consistency across pages
    - Check navigation consistency
    - Check styling consistency
    - Check terminology consistency
    - _Requirements: 6.4_

- [x] 10.3 Property test for content consistency

  - **Property 3: Content Consistency Across Pages**
  - **Validates: Requirements 6.4**

- [x] 11. Documentation and Changelog Creation

  - [x] 11.1 Create changelog directory structure

    - Create changelog/ folder in project root
    - _Requirements: 7.5_

  - [x] 11.2 Generate CONTENT_CHANGES.md
    - Document all content updates and additions
    - Include date heading for changes (January 1, 2025)
    - Organize changes by category (Professional Updates, Content Additions, Technical Updates)
    - Include both technical and content changes
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.6_

- [x] 11.3 Test changelog documentation

  - Verify CONTENT_CHANGES.md exists in changelog folder
  - Verify all required sections are present
  - **Validates: Requirements 7.1-7.6**

- [x] 12. Final Integration and Testing

  - [x] 12.1 Run complete test suite

    - Execute all unit tests
    - Execute all property tests
    - Verify all tests pass
    - _Requirements: 2.2, 2.5_

  - [x] 12.2 Build and validate final website

    - Run production build
    - Test static export functionality
    - Verify all pages load correctly
    - Test all links and navigation
    - _Requirements: 1.5, 1.6_

  - [x] 12.3 Performance and compatibility validation
    - Check bundle size hasn't increased significantly
    - Test responsive design on different screen sizes
    - Validate accessibility compliance
    - _Requirements: 1.6_

- [ ] 13. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The implementation follows a dependency-first approach, then content updates, then testing validation
- All tasks are required for comprehensive implementation
