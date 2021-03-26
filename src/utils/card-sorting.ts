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
    return 1
  }
  if (!a.node.featured && b.node.featured) {
    return -1
  }
  return 0
}

export default {
  alphaAsc,
  alphaDesc,
  featured,
}