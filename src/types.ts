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
