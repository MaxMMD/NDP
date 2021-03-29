export interface ImageType {
  height: number
  width: number
  src: string
  srcSet?: string
}

export interface MDXNode {
  childMdx: {
    body: string
  }
}

export interface ArtefactType {
  slug: string
  title: string
  id: string
  restorationProgress: number
  restorationComplete?: boolean
  campaignPageUrl: string
  featured: boolean
  images: Array<{
    resize: ImageType
    fluid: ImageType
  }>
  description: MDXNode
  related?: ArtefactType[]
}

export interface VideoType {
  id: string
  title: string
  coverImage: {
    fluid: ImageType
  }
  videoEmbedUrl: string
}

export interface ContentfulPageType {
  pageTitle: string
  pageName: string
  introduction?: MDXNode
  image?: {
    fluid: ImageType
  }
  copyBlock1?: MDXNode
  copyBlock2?: MDXNode
}

export interface Node<T> {
  node: T
}

export interface GalleryPagePropsData {
  allContentfulFriendsOfNotreDameArtefact: {
    edges: Node<ArtefactType>[]
  }
}

export interface VideoPagePropsData {
  allContentfulFriendsOfNotreDameVideo: {
    edges: Node<VideoType>[]
  }
}

export interface ContentfulPagePropsData {
  allContentfulFriendsOfNotreDamePage: {
    edges: Node<ContentfulPageType>[]
  }
}
