import React from "react"
import { graphql } from "gatsby"

import { BASE_URL } from "../config"
import {
  Layout,
  ListingContainer,
  ContentCard,
  FeatureImage,
  Pagination,
  Seo,
} from "../components"

import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`
  const nextPage = `${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Layout>
      <ListingContainer>
        <FeatureImage />
        <Seo />
        <H1 textAlign="center" margin="0 0 1rem 0">
          hello world this is a test
        </H1>
        <P color="dark2" textAlign="center">
          this is testing the p tag
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={`${BASE_URL}${post.node.frontmatter.slug}`}
          />
        ))}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </ListingContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            excerpt
            title
          }
        }
      }
    }
  }
`

export default allPosts
