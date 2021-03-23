const PLACEHOLDER_IMAGE = "https://placehold.it/500x600/252525"
const LIVE_IMAGE = "https://placehold.it/500x600/323333"

const TEST_IMAGE =
  "https://images.unsplash.com/photo-1616485569678-e1a068aa6388?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2800&q=80"

export function generateCards(n: number) {
  return Array.from(Array(n)).map((_, i) => ({
    label: `Card Item #${i + 1}`,
    href: `/gallery/item-${i + 1}`,
    image: {
      placeholder: PLACEHOLDER_IMAGE,
      src: i === 16 ? TEST_IMAGE : LIVE_IMAGE,
      width: 500,
      height: 600,
    },
    progress: 33,
  }))
}

export function convertJsonToCards(data: any) {
  const { allArtefactsJson } = (data as any) || {}

  if (!allArtefactsJson) {
    return []
  }

  return allArtefactsJson.edges.map(({ node }: any) => ({
    label: node.title,
    href: `/gallery/${node.slug}`,
    image: node.image,
    progress: node.progress,
  }))
}
