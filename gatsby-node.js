/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const POST_PER_PAGE = 3

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
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

  //create paginated pages for posts
  const numPages = Math.ceil(data.allMdx.edges.length / POST_PER_PAGE)

  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/` : `/${index + 1}`,
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
  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: {
        id,
      },
    })
  })

  console.log(JSON.stringify(data, null, 4))
}
