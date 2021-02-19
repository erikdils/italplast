const path = require("path");

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        return result;
      })
    );
  });

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const generateCatalogPages = makeRequest(
    graphql,
    `
    {
        allStrapiCatalog {
            edges {
                node {
                  id
                  slug
                }
            }
        }
        allStrapiCategorie {
            edges {
                node {
                  id
                  strapiId
                  slug
                }
            }
        }
        allStrapiSubCategories {
            edges {
              node {
                id
                strapiId
                slug
              }
            }
          }
    }    
    `
  ).then(result => {
    result.data.allStrapiCatalog.edges.forEach(({ node }) => {
      createPage({
        path: `/catalog/${node.slug}/`,
        component: path.resolve(`src/template/product-card.js`),
        context: {
          id: node.id,
        },
      });
    });
    result.data.allStrapiCategorie.edges.forEach(({ node }) => {
      createPage({
        path: `/catalog/${node.slug}/`,
        component: path.resolve(`src/template/catalog.js`),
        context: {
          id: node.strapiId,
        },
      });
    });
    result.data.allStrapiSubCategories.edges.forEach(({ node }) => {
      createPage({
        path: `/materials/${node.slug}/`,
        component: path.resolve(`src/template/materials.js`),
        context: {
          id: node.strapiId,
        },
      });
    });
  });
  return Promise.all([generateCatalogPages]);
};
