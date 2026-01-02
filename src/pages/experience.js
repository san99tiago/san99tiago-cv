import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, GridItem } from '../components/grid-item'

// Experience thumbnails
import thumb_2018_01_01_experience_cool_projects from '../public/images/experience/2018_01_01_experience_cool_projects.png'
import thumb_2021_01_20_experience_pragma from '../public/images/experience/2021_01_20_experience_pragma.png'
import thumb_2021_07_01_experience_bancolombia from '../public/images/experience/2021_07_01_experience_bancolombia.png'
import thumb_2021_11_01_experience_eia from '../public/images/experience/2021_11_01_experience_eia.png'
import thumb_2023_05_02_experience_epam from '../public/images/experience/2023_05_02_experience_epam.png'
import thumb_2023_02_01_experience_aws_community_builder from '../public/images/experience/2023_02_01_experience_aws_community_builder.png'
import thumb_2024_01_01_experience_aws_user_group_medellin_leader from '../public/images/experience/2024_01_01_experience_aws_user_group_medellin_leader.png'
import thumb_2024_11_25_experience_aws from '../public/images/experience/2024_11_25_experience_aws.png'
import thumb_2025_10_23_eia_premios from '../public/images/experience/2025_10_23_EIA_Egresado_Ejemplar_Ser_Saber_Servir_Nominacion.png'

const Experience = () => (
  <Layout title="Experience">
    <Container
      maxW={{ base: '100%', md: '80%', lg: '70%', xl: '60%' }}
      px={{ base: 4, md: 6, lg: 8 }}
    >
      <Heading as="h3" fontSize={20} mb={4}>
        Work Experience
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="aws"
            title="Solutions Architect"
            thumbnail={thumb_2024_11_25_experience_aws}
          >
            Amazon Web Services (2024-present)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="epam-systems"
            title="Lead Systems Engineer"
            thumbnail={thumb_2023_05_02_experience_epam}
          >
            EPAM Systems (2022-2024)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="bancolombia"
            title="Software Specialist"
            thumbnail={thumb_2021_07_01_experience_bancolombia}
          >
            Bancolombia (2021-2022)
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pragma"
            title="DevOps Engineer"
            thumbnail={thumb_2021_01_20_experience_pragma}
          >
            PRAGMA (2021)
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.1}>
        <Box height="1px" bg="gray.200" my={5} width="100%" />
        <Heading as="h3" fontSize={20} mb={4}>
          Featured
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <GridItem
            href="https://www.linkedin.com/posts/san99tiago_premiossersaberservireia-orgulloeia-comunidadeia-activity-7377523778962104320-xns5"
            title="Universidad EIA - Premios Ser, Saber, Servir - Tecnología 2025"
            thumbnail={thumb_2025_10_23_eia_premios}
          >
            Egresado Ejemplar (2025)
          </GridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="aws-user-group-medellin-leader"
            title="AWS User Group Leader"
            thumbnail={
              thumb_2024_01_01_experience_aws_user_group_medellin_leader
            }
          >
            AWS UG Medellin (2024-present)
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="aws-community-builder"
            title="AWS Community Builder"
            thumbnail={thumb_2023_02_01_experience_aws_community_builder}
          >
            Serverless Category (2023-2025)
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="cool-projects"
            title="Open Source Software on AWS"
            thumbnail={thumb_2018_01_01_experience_cool_projects}
          >
            My Free Time (2017-present)
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="baxter-bon-appetit"
            title="Baxter Bon Appetit, Assisted Robotics"
            thumbnail={thumb_2021_11_01_experience_eia}
          >
            EIA University (2020-2021)
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Experience
