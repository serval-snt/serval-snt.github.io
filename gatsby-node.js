/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages`})
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const newsPostTemplate = path.resolve(`src/templates/news-post.js`);
  const projectsPostTemplate = path.resolve(`src/templates/projects-post.js`);
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `
  ).then(result => {
    if(result.errors) {
      return Promise.reject(result.errors)
    }
    const all = result.data.allMarkdownRemark.edges;

    const news = all.filter(
      edge => edge.node.frontmatter.path.startsWith("/news")
    );
    const projects = all.filter(
      edge => edge.node.frontmatter.path.startsWith("/projects")
    );
    
    news.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: newsPostTemplate,
        slug: node.fields.slug,
        context: {},
      })
    })
    projects.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: projectsPostTemplate,
        slug: node.fields.slug,
        context: {},
      })
    })
  })
}