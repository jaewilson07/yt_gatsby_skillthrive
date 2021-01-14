/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

// const { createFilePath } = require("gatsby-source-filesystem")

const {
  BASE_URL,
  POST_PER_PAGE,
  GATSBY_TRAILINGSLASH,
} = require("./src/config")

const generateSlug = (parent, node) => {
  let value = node.id

  if (parent) {
    value = parent.relativePath.replace(parent.ext, "")
  }
  if (node.frontmatter && node.frontmatter.slug) {
    value = node.frontmatter.slug
  }

  if (value === "index") {
    value = ""
  }

  // switch (node_type) {
  //   case "notion":
  //     const t_slug = url ? `/blog/${url}` : `/blog/${slug}`
  //     console.log(node_type, t_slug, "the original slug: ", slug)
  //     return t_slug

  //   default:
  return GATSBY_TRAILINGSLASH ? `${value}/` : value

  // }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              id
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
  const edges = result.data.allMdx.edges
  const numPages = Math.ceil(edges.length / POST_PER_PAGE)

  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? BASE_URL : `${BASE_URL}/${index + 1}`,
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
  edges.forEach(({ node }, index) => {
    console.log(Object.keys(node))
    const { id, slug } = node.fields

    console.log(id, slug)

    const previous = index === edges.length - 1 ? null : edges[index + 1].node
    const next = index === 0 ? null : edges[index - 1].node

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/gitPost.js"),
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
  const { createNodeField } = actions

  const parent = getNode(node.parent)

  const slug = generateSlug(parent, node)

  console.log(slug)

  createNodeField({
    name: "id",
    node,
    value: node.id,
  })

  createNodeField({
    name: `slug`,
    node,
    value: slug,
  })
}
