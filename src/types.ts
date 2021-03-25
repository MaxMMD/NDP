export interface ImageType {
  height: number
  width: number
  src: string
  srcSet?: string
}

export interface ArtefactType {
  slug: string
  title: string
  id: string
  restorationProgress: number
  featured: boolean
  images: Array<{
    resize: ImageType
    fluid: ImageType
  }>
  description: {
    childMdx: {
      body: string
    }
  }
}

export interface ArtefactNode {
  node: ArtefactType
}

export interface GalleryPagePropsData {
  allContentfulFriendsOfNotreDameArtefact: {
    edges: ArtefactNode[]
  }
}
