# Santiago García Arango - CV Project Guidelines

## Project Overview

This is Santiago's personal CV website built with Next.js and deployed on AWS using CDK. The site showcases professional experience, projects, and content in both Spanish and English.

## Architecture & Stack

- **Frontend**: Next.js with Chakra UI for styling
- **Infrastructure**: AWS CDK (TypeScript) for deployment
- **Hosting**: AWS (S3, CloudFront, Route 53)
- **Content**: Static site with dynamic routing for experience pages

## Code Style & Conventions

- Use ES6+ JavaScript features and modern React patterns
- Follow Chakra UI component patterns for consistent styling
- Maintain responsive design principles
- Keep components modular and reusable
- Use semantic HTML and ensure accessibility compliance

## File Structure Patterns

- Experience pages follow template pattern in `src/pages/experience/`
- Images organized by section: `home/`, `experience/`, `content/`
- CDK infrastructure code in separate `cdk/` directory
- CloudFront functions in `cloudfront_functions/src/`

## Content Guidelines

- Professional tone with personal touch
- Bilingual support (Spanish/English)
- Focus on AWS expertise and cloud architecture
- Include relevant technical details and achievements
- Maintain consistent branding and visual identity

## Development Practices

- Test infrastructure changes in development environment first
- Use CDK best practices for AWS resource management
- Optimize images and assets for web performance
- Follow Next.js optimization guidelines
- Maintain clean, documented code

## Deployment Notes

- Use provided build and deploy scripts
- Ensure CDK stack is properly configured before deployment
- Test CloudFront functions before production deployment
- Monitor performance and costs in AWS console
