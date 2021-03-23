const TEST_ARTEFACTS = ["item-1"]

exports.createPages = async function ({ actions, graphql }) {
  TEST_ARTEFACTS.forEach(node => {
    const slug = `gallery/${node}`
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/artefact.tsx`),
      context: { slug: slug },
    })
  })
}
