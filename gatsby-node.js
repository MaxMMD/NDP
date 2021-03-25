const path = require("path")

exports.createPages = async function ({ actions, graphql }) {
  const template = require.resolve(`./src/templates/artefact.tsx`)
  const result = await graphql(`
    query JSONDataQuery {
      allContentfulFriendsOfNotreDameArtefact(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            slug
            title
            id
            restorationProgress
            description {
              childMdx {
                body
              }
            }
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
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create blog post pages.
  await Promise.all(
    result.data.allContentfulFriendsOfNotreDameArtefact.edges.map(
      async ({ node }) => {
        const slug = `gallery/${node.slug}`
        let relatedArtefacts = []

        // if (node.related && node.related.length) {
        //   const relatedFilterQuery = node.related.map(r => `"${r}"`).join(",")
        //   const relatedResult = await graphql(`
        //     query JSONDataQuery {
        //       allArtefactsJson(filter: {slug: {in: [${relatedFilterQuery}]}}) {
        //         edges {
        //           node {
        //             id
        //             slug
        //             title
        //             image {
        //               src
        //               width
        //               height
        //             }
        //           }
        //         }
        //       }
        //     }
        //   `)

        //   relatedArtefacts = relatedResult
        // }

        return actions.createPage({
          path: slug,
          component: template,
          context: {
            ...node,
            relatedArtefacts,
          },
        })
      }
    )
  )
}

exports.onCreateNode = ({ node, actions, createContentDigest }) => {
  const { createNode, createNodeField } = actions

  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === `ArtefactsJson`) {
    // Add text/markdown node children to Release node
    const textNode = {
      id: `${node.id}-MarkdownBody`,
      parent: node.id,
      dir: path.resolve("./"),
      internal: {
        type: `${node.internal.type}MarkdownBody`,
        mediaType: "text/markdown",
        content: node.body || "",
        contentDigest: createContentDigest(node.body || ""),
      },
    }
    createNode(textNode)

    // Create markdownBody___NODE field
    createNodeField({
      node,
      name: "markdownBody___NODE",
      value: textNode.id,
    })
  }
}
