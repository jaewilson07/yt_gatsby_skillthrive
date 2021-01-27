import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout, PostContainer, Seo, Post } from "../components"
import { H1 } from "../elements"

const singlePost = ({ data }) => {
  const frontmatter = data.mdx.frontmatter

  const seoImage =
    frontmatter.featureImage && frontmatter.featureImage.publicURL

  return (
    <Layout>
      <PostContainer
        items={data.mdx.tableOfContents.items}
        title={frontmatter.title}
        edges={data.allMdx.edges}
      >
        <Seo
          title={frontmatter.title}
          image={seoImage}
          description={frontmatter.excerpt}
          keywords={frontmatter.tags ? frontmatter.tags.split(", ") : []}
        />
        <Post>
          <H1 margin="0 0 2rem 0">{frontmatter.title}</H1>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Post>
      </PostContainer>
    </Layout>
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

    site {
      siteMetadata {
        title
      }
    }

    allMdx {
      edges {
        node {
          fields {
            slug
            parent_page
          }

          frontmatter {
            title
          }
        }
      }
    }
  }
`
