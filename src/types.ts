export interface ImageType {
  height: number
  width: number
  src: string
  srcSet?: string
}

export interface MDXNode {
  childMdx: {
    body: string
    excerpt: string
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
    fixed: ImageType
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
  plainText1?: {
    plainText1?: string
  }
}

export interface Node<T> {
  node: T
}

export interface BasicPagePropsData {
  site: {
    siteMetadata: {
      title: string
      description: string
      donationLink: string
      socialMedia: {
        facebook: string
        twitter: string
        instagram: string
      }
    }
  }
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
  contentfulFriendsOfNotreDamePage: ContentfulPageType
}
