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
  let value

  if (parent) {
    value = parent.relativePath.replace(parent.ext, "")
  }
  if (value === "index") {
    value = ""
  }
  if (node.frontmatter && node.frontmatter.slug) {
    value = `${value.substring(0, value.lastIndexOf("/"))}${
      node.frontmatter.slug
    }`
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

const generateUniqueParents = edges => {
  let parents = []

  // ar indexOfStevie = myArray.findIndex(i => i.hello === "stevie");

  edges.forEach(({ node }) => {
    //if node is not in parents then add it
    const parent_page = node.fields.parent_page
    if (parents.findIndex(parent => parent.id === parent_page) === -1) {
      parents.push({ id: parent_page, numPages: 1 })
    } else {
      // find the index of the parent and then increment numPages
      let index = parents.findIndex(parent => parent.id === parent_page)
      parents[index].numPages = parents[index].numPages + 1
    }
  })

  parents = parents.map(parent => {
    parent.numPages = Math.ceil(parent.numPages / POST_PER_PAGE)
    return parent
  })
  console.log(parents)

  return parents
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
              parent_page
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

  let parent_pages = generateUniqueParents(edges)

  parent_pages.forEach(parent => {
    Array.from({ length: parent.numPages }, (_, index) => {
      actions.createPage({
        path: index === 0 ? parent.id : `${parent.id}/${index + 1}`,
        component: require.resolve("./src/templates/allPosts.js"),
        context: {
          limit: POST_PER_PAGE,
          skip: index * POST_PER_PAGE,
          numPages: parent.numPages,
          currentPage: index + 1,
        },
      })
    })
  })

  // create single posts
  edges.forEach(({ node }, index) => {
    const { id, slug } = node.fields

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

  createNodeField({
    name: `parent_page`,
    node,
    value: slug ? slug.substring(0, slug.lastIndexOf("/")) : "",
  })
}
