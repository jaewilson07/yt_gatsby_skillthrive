import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { H1 } from "../elements"

import {
  Container,
  Post,
  FeatureImage,
  Seo,
  TableOfContents,
} from "../components"

const singlePost = ({ data }) => {
  const frontmatter = data.mdx.frontmatter

  const featureImage =
    frontmatter.featureImage && frontmatter.featureImage.childImageSharp.fixed

  const seoImage =
    frontmatter.featureImage && frontmatter.featureImage.publicURL

  return (
    <Container>
      <Seo
        title={frontmatter.title}
        image={seoImage}
        description={frontmatter.excerpt}
        keywords={frontmatter.tags ? frontmatter.tags.split(", ") : []}
      />
      {featureImage && <FeatureImage fixed={featureImage} />}
      {data.mdx?.tableOfContents?.items && (
        <TableOfContents items={data.mdx.tableOfContents.items} />
      )}
      <Post>
        <H1 margin="0 0 2rem 0">{frontmatter.title}</H1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      tableOfContents
      frontmatter {
        date
        excerpt
        slug
        title
        tags
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
