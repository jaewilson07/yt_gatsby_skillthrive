import React from "react"

import { graphql } from "gatsby"
import { Content, FeatureImage, ListingContainer } from "../components"
import { H1 } from "../elements"

const notFound = ({ data }) => {
  console.log(Object.keys(data.imageSharp), data.imageSharp)
  const featureImage = data.imageSharp.fixed

  return (
    <ListingContainer>
      <FeatureImage fixed={featureImage} />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0" fontSize="1.5rem">
          All who wander are not lost... <br />
          But what you seek cannot be found
        </H1>
      </Content>
    </ListingContainer>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "404_image.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
