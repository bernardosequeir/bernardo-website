const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const portfolio = await graphql(`
    query {
      allFile {
      edges {
        node {
          name

          relativeDirectory
        }
      }
    }
  }
  `)

  result.data.allMarkdownRemark.edges.filter(({ node }) => node.fields.slug.includes('blog-post')).forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      }
    })
  })
  result.data.allMarkdownRemark.edges.filter(({ node }) => node.fields.slug.includes('portfolioExplanation')).forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/portfolio.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      }
    })
  })
  /*portfolio.data.allFile.edges.filter(({ node }) => node.relativeDirectory === "portfolio").forEach(({ node }) => {
    console.log(node);
    createPage({
      path: node.name,
      component: path.resolve(`./src/pages/portfolio/${node.name}.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.name,
      }
    })
  })*/
}
