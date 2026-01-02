import {
  AspectRatio,
  Badge,
  Container,
  Heading,
  Link,
  Box
} from '@chakra-ui/react'

import { ExternalLink } from 'lucide-react'
import {
  Title,
  BadgeStyle,
  BadgeGreen,
  BadgeYellow,
  ExperienceSection,
  ExperienceEmphasis
} from '../../components/experience'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'

const ExperienceAWSCommunityBuilder = () => (
  <Layout title="AWS Community Builder">
    <Container>
      <Title>
        AWS Community Builder <Badge>2023-present</Badge>
      </Title>
      <P>
        I am proud to have been chosen as an official AWS Community Builder,
        recognizing my leadership and technical expertise. My selection was
        based on my active contributions to the open-source community on GitHub
        and my growing YouTube channel.
      </P>
      <Box height="1px" bg="gray.200" my={5} width="100%" />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Serverless Category
        </Heading>
        <ExperienceSection>
          <ExperienceEmphasis>Description</ExperienceEmphasis>
          The AWS Community Builders program is geared towards AWS technical
          enthusiasts and emerging thought leaders who are passionate about
          sharing knowledge and connecting with the AWS technical community.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeGreen>Program</BadgeGreen>
          </BadgeStyle>
          <Link
            href="https://aws.amazon.com/developer/community/community-builders/"
            target="_blank"
          >
            Official AWS Community Builders Page
            <ExternalLink
              size={12}
              style={{ marginLeft: '2px', display: 'inline' }}
            />
          </Link>
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeYellow>Post</BadgeYellow>
          </BadgeStyle>
          <Link
            href="https://www.linkedin.com/posts/san99tiago_awscommunity-awscommunitybuilders-aws-activity-7040483263907274752-LACZ"
            target="_blank"
          >
            LinkedIn Post Explaining AWS CB Program
            <ExternalLink
              size={12}
              style={{ marginLeft: '2px', display: 'inline' }}
            />
          </Link>
        </ExperienceSection>
      </Section>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/dms7RlAPNDs"
          title="You Belong Here | AWS Community Builders"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/P6fCDTz6fPY"
          title="AWS Community Builders Program - What is it"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default ExperienceAWSCommunityBuilder
