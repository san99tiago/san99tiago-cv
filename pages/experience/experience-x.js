import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/experience'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Experience X">
        <Container>
            <Title>
                Experience X <Badge>2021-</Badge>
            </Title>
            <P>
                Experience X Lorem Ipsum for my experience X.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://github.com/san99tiago/aws-cdk-hello-world">
                        https://github.com/san99tiago/aws-cdk-hello-world <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Project</Meta>
                    <span>Awesome project example</span>
                </ListItem>
                <ListItem>
                    <Meta>Tools</Meta>
                    <span>AWS/CloudFormation/EC2/ASG</span>
                </ListItem>
                <ListItem>
                    <Meta>Blog Post</Meta>
                    <Link href="https://github.com/san99tiago/aws-cdk-hello-world">
                        Some cool achievement based on the link <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/experience/experience_x/example_01.png" alt="change_me_to_something_relevant" />
            <WorkImage src="/images/experience/experience_x/example_01.png" alt="change_me_to_something_relevant" />
            <WorkImage src="/images/experience/experience_x/example_01.png" alt="change_me_to_something_relevant" />

        </Container>
    </Layout>
)

export default Work
