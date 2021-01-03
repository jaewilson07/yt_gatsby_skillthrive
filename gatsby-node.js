/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const POST_PER_PAGE = 3

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  //create paginated pages for posts
  const posts = result.data.allMdx.edges
  const numPages = Math.ceil(posts.length / POST_PER_PAGE)

  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/blog` : `/blog/${index + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: POST_PER_PAGE,
        skip: index * POST_PER_PAGE,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  // create single posts
  posts.forEach((post, index) => {
    const slug = post.node.frontmatter.slug
    const id = post.node.id
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: {
        id,
        slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    actions.createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
