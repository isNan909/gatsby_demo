/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    `
      {
        allContentfulSitePost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      // Resolve the paths to our template
      const sitePostTemplate = path.resolve("./src/template/siteposts.js")

      // Then for each result we can create a page
      result.data.allContentfulSitePost.edges.forEach(edge => {
        createPage({
          path: `/siteposts/${edge.node.slug}/`,
          component: slash(sitePostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error cannot retrive contentful data", error)
    })
}
