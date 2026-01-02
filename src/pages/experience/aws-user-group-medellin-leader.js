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

const ExperienceAWSUGLeader = () => (
  <Layout title="AWS User Group Leader">
    <Container
      maxW={{ base: '100%', md: '80%', lg: '70%', xl: '60%' }}
      px={{ base: 4, md: 6, lg: 8 }}
    >
      <Title>
        AWS User Group Leader <Badge>2024-present</Badge>
      </Title>
      <P>
        I am honored to have been selected as an official AWS User Group Leader
        for AWS UG Medellin, a recognition of my leadership and technical
        expertise. This opportunity reflects my active contributions and ongoing
        support to the AWS community in Medellin.
      </P>
      <Box height="1px" bg="gray.200" my={5} width="100%" />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          AWS User Groups
        </Heading>
        <ExperienceSection>
          <ExperienceEmphasis>Description</ExperienceEmphasis>
          The AWS User Groups are a great way to learn about the latest trends
          in AWS by connecting with local technical communities at different
          cities throughout the world. User groups are peer-to-peer communities
          which meet regularly to share ideas, answer questions, and learn about
          new services and best practices.
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeGreen>Program</BadgeGreen>
          </BadgeStyle>
          <Link
            href="https://aws.amazon.com/developer/community/usergroups"
            target="_blank"
          >
            Official AWS User Groups Page
            <ExternalLink
              size={12}
              style={{ marginLeft: '2px', display: 'inline' }}
            />
          </Link>
        </ExperienceSection>
        <ExperienceSection>
          <BadgeStyle>
            <BadgeYellow>AWS User Group Medellin</BadgeYellow>
          </BadgeStyle>
          <Link href="https://www.meetup.com/awsugmed/" target="_blank">
            Meetup Link for AWS User Group Medellin
            <ExternalLink
              size={12}
              style={{ marginLeft: '2px', display: 'inline' }}
            />
          </Link>
        </ExperienceSection>
      </Section>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/s-BrAa-dIfQ"
          title="AWS User Group Medellin | Advanced APIs Event - Santiago Garcia Arango"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/9LMtXSYBZ-c"
          title="AWS User Group Medellin - Santiago Garcia Arango"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/YGnyLX_ItIM"
          title="AWS User Group Medellin - Santiago Garcia Arango"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default ExperienceAWSUGLeader
