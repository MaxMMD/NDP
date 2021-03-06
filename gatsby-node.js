const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const template = require.resolve(`./src/templates/artefact.tsx`)
  const result = await graphql(`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      allContentfulFriendsOfNotreDameArtefact(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            slug
            title
            id
            restorationProgress
            restorationComplete
            campaignPageUrl
            description {
              childMdx {
                body
                excerpt(truncate: false)
              }
            }
            images {
              resize(height: 488, width: 610) {
                width
                height
                src
              }
              fixed(width: 1200, height: 627) {
                src
              }
            }
            related {
              slug
              title
              id
              restorationProgress
              images {
                resize(height: 488, width: 610) {
                  width
                  height
                  src
                }
              }
            }
          }
        }
      }
      contentfulFriendsOfNotreDamePage(
        pageName: { eq: "Artefact" }
        node_locale: { eq: "en-US" }
      ) {
        pageTitle
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog post pages.
  await Promise.all(
    result.data.allContentfulFriendsOfNotreDameArtefact.edges.map(
      async ({ node }) => {
        const slug = `gallery/${node.slug}`

        return actions.createPage({
          path: slug,
          component: template,
          context: {
            node: node,
            page: result.data.contentfulFriendsOfNotreDamePage || {},
            site: result.data.site,
          },
        })
      }
    )
  )
}
