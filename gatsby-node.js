exports.createPages = async function ({ actions, graphql }) {
  const template = require.resolve(`./src/templates/artefact.tsx`)
  const result = await graphql(`
    query JSONDataQuery {
      allArtefactsJson {
        edges {
          node {
            slug
            title
            related
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
    result.data.allArtefactsJson.edges.map(async ({ node }) => {
      const slug = `gallery/${node.slug}`
      let relatedArtefacts = []

      if (node.related && node.related.length) {
        const relatedFilterQuery = node.related.map(r => `"${r}"`).join(",")
        const relatedResult = await graphql(`
          query JSONDataQuery {
            allArtefactsJson(filter: {slug: {in: [${relatedFilterQuery}]}}) {
              edges {
                node {
                  id
                  slug
                  title
                  image {
                    src
                  }
                }
              }
            }
          }
        `)

        console.log(relatedResult)
        relatedArtefacts = relatedResult
      }

      return actions.createPage({
        path: slug,
        component: template,
        context: {
          ...node,
          relatedArtefacts,
        },
      })
    })
  )
}
