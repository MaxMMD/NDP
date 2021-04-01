import { ArtefactType, Node } from "../types"

const alphaAsc = (a: Node<ArtefactType>, b: Node<ArtefactType>) => {
  if (a.node.title < b.node.title) {
    return -1
  }
  if (a.node.title > b.node.title) {
    return 1
  }
  return 0
}

const alphaDesc = (a: Node<ArtefactType>, b: Node<ArtefactType>) => {
  if (a.node.title > b.node.title) {
    return -1
  }
  if (a.node.title < b.node.title) {
    return 1
  }
  return 0
}

const featured = (a: Node<ArtefactType>, b: Node<ArtefactType>) => {
  if (a.node.featured && !b.node.featured) {
    return -1
  }
  if (!a.node.featured && b.node.featured) {
    return 1
  }
  return 0
}

const restored = (a: Node<ArtefactType>, b: Node<ArtefactType>) => {
  return b.node.restorationProgress - a.node.restorationProgress
}

export const sortOptions = [
  { label: "Featured", value: "featured-desc" },
  { label: "A - Z", value: "alpha-asc" },
  { label: "Restored %", value: "restored-desc" },
]

export function getSortLabel(sortMode: string) {
  switch (sortMode) {
    case "featured-desc":
      return "Sort: Featured"
    case "alpha-asc":
      return "Sort: A - Z"
    case "restored-desc":
      return "Sort: Restored %"
    default:
      return "Sort"
  }
}

export default {
  alphaAsc,
  alphaDesc,
  featured,
  restored,
}
