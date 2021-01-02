import React from "react"
import { FeatureImage, Container , Content, ContentCard} from "../components"

const IndexPage = () => (
  <Container>
    <FeatureImage />
    <Content>
      <ContentCard
        date="1/1/2015"
        title="test me"
        excerpt="what a great artyicle"
        slug="/test"
      />
    </Content>
  </Container>
)

export default IndexPage
