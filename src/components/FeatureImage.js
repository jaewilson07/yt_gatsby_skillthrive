import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import { FeatureImageWrapper, StyledGatsbyImage } from "../elements"

export const FeatureImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(
        fixed: {
          originalName: { eq: "faef626ed4114590556d88b3df3c7bd2c8fb1fc1.png" }
        }
      ) {
        fixed {
          ...GatsbyImageSharpFixed
        }
        id
      }
    }
  `)
  return (
    <FeatureImageWrapper>
      <StyledGatsbyImage fixed={fixed ? fixed : data.imageSharp.fixed} />
    </FeatureImageWrapper>
  )
}
