# CV Website Content Changes

## January 1, 2025

This document records all content updates, additions, and technical changes made to Santiago García Arango's personal CV website.

---

## Professional Updates

### Current Role Update

- Updated main heading to: "Solutions Architect at AWS | AWS UG Leader | GenAI Enthusiast"
- Updated professional description to reflect Solutions Architect role at AWS
- Changed AWS certifications count from previous value to "10x AWS Certifications"

### AWS Work Experience Addition

- Created new AWS experience page (`src/pages/experience/aws.js`)
- Added comprehensive role details including:
  - Work with advanced Cloud-Based architectures on AWS
  - Top FSI (Financial Services Industry) clients across LATAM
  - Leading Generative AI adoption initiatives
  - CORE banking migrations to AWS
  - Serverless architecture design
  - Cloud and AI strategies at technical and business levels
- Added experience image: `2024_11_25_experience_aws.png`
- Updated experience.js to feature AWS Solutions Architect role prominently

---

## Content Additions

### New Video Content

1. **WhatsApp Chatbot with GenAI on AWS**

   - URL: https://youtu.be/9LMtXSYBZ-c
   - Image: `2024_11_06_YouTube_Banner_Chatbot_WhatsApp_AWS.png`
   - Added to content.js page

2. **Lo Nuevo de IA Generativa con AWS - Agentes, MCP, A2A, AgentCore**

   - URL: https://youtu.be/YGnyLX_ItIM
   - Image: `2025_07_19_YouTube_Banner_IA_Generativa_Recap_AWS_UGMed.png`
   - Added to content.js page

3. **Tokens, Embeddings, RAG - GenAI (AWS Women Colombia)**
   - URL: https://youtu.be/-nl8d7zW3VU
   - Image: `2025_08_28_AWS_RAG_Embeddings_GenAI_Women_Col.jpg`
   - Added to content.js page

---

## Technical Updates

### Dependency Modernization

- **Next.js**: Updated to v16.1.1 (from v13.3.0)
- **React**: Updated to v19.2.3 (from v18.2.0)
- **React DOM**: Updated to v19.2.3 (from v18.2.0)
- **Chakra UI**: Updated to v3.30.0 (from v2.5.5)
- **Framer Motion**: Updated to v12.23.26
- **Emotion React**: Updated to v11.14.0
- **Emotion Styled**: Updated to v11.14.1

### Chakra UI v3 Migration

- Updated ChakraProvider configuration to use system instead of theme
- Replaced `colorScheme` props with `colorPalette` throughout components
- Updated boolean props from `isX` pattern to `x` pattern
- Migrated component APIs to v3 syntax

### New Dependencies Added

- **lucide-react**: v0.562.0 (icon library replacement)

### Testing Infrastructure

- Added Jest v29.7.0 for unit testing
- Added React Testing Library v16.3.1
- Added jest-environment-jsdom v29.7.0
- Created test directory structure (`src/__tests__/`)
- Implemented component tests for:
  - Layout component
  - Navigation component
  - Bio component
  - GridItem component
- Added property-based tests for:
  - Component rendering validation
  - Content consistency across pages

### Development Tools Updated

- **ESLint**: Updated to v9.39.2
- **Prettier**: Updated to v3.7.4
- **Babel presets**: Updated to v7.28.5
- Added Turbopack support for development (`next dev --turbo`)

---

## Content Quality Improvements

### Page Content Review

- Reviewed and enhanced content descriptions across all pages
- Ensured consistent professional tone throughout
- Verified all external links are functional
- Maintained bilingual support (Spanish/English)

### Styling Consistency

- Ensured consistent navigation elements across pages
- Verified responsive design patterns
- Maintained established design system

---

## Files Modified

### Pages

- `src/pages/index.js` - Updated professional information and heading
- `src/pages/experience.js` - Added AWS role to work experience section
- `src/pages/content.js` - Added new video content entries
- `src/pages/experience/aws.js` - New file for AWS experience details

### Configuration

- `src/package.json` - Updated dependencies and added testing scripts
- `src/jest.config.js` - New Jest configuration
- `src/jest.setup.js` - New Jest setup file

### Tests

- `src/__tests__/components/Bio.test.js` - Bio component tests
- `src/__tests__/components/GridItem.test.js` - GridItem component tests
- `src/__tests__/components/Layout.test.js` - Layout component tests
- `src/__tests__/components/Navigation.test.js` - Navigation component tests
- `src/__tests__/properties/component-rendering.test.js` - Property tests
- `src/__tests__/properties/content-consistency.test.js` - Content consistency tests
- `src/__tests__/dependency-versions.test.js` - Dependency validation tests
- `src/__tests__/chakra-migration.test.js` - Chakra UI migration tests

---

## Notes

- All changes maintain backward compatibility with existing functionality
- Static export to AWS S3/CloudFront deployment remains functional
- Performance optimizations included through Turbopack and updated dependencies
