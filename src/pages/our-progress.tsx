import { graphql, PageProps } from "gatsby"
import React from "react"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import VideoCard from "../components/VideoCard"
import {
  BasicPagePropsData,
  ContentfulPagePropsData,
  VideoPagePropsData,
} from "../types"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Progress({
  data,
}: PageProps<
  VideoPagePropsData & ContentfulPagePropsData & BasicPagePropsData
>) {
  const videos = data.allContentfulFriendsOfNotreDameVideo?.edges || []
  const page = data.contentfulFriendsOfNotreDamePage
  return (
    <Root
      className="progress-page page bg-black text-white"
      title={`Our Progress | ${data.site.siteMetadata.title}`}
      description={data?.site?.siteMetadata?.description}
      showFrame
    >
      <div className="container mx-auto text-white py-6">
        <Block>
          <div className="lg:w-1/2">
            <MDXRenderer>
              {page?.introduction?.childMdx?.body || ""}
            </MDXRenderer>
          </div>
        </Block>

        <Spacer className="mt-6 md:mt-12" />

        <Block>
          <div className="VideoGrid md:flex md:flex-wrap -my-2 -mx-2">
            {videos.map(({ node }) => (
              <VideoCard
                key={node.id}
                className="p-2 md:w-1/2 lg:w-1/3 flex-grow-0"
                {...node}
              />
            ))}
          </div>
        </Block>

        <Spacer />
      </div>
    </Root>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    contentfulFriendsOfNotreDamePage(
      pageName: { eq: "Our Progress" }
      node_locale: { eq: "en-US" }
    ) {
      pageTitle
      introduction {
        childMdx {
          body
        }
      }
    }
  }
`

// To fetch progress entries, add this query:

// allContentfulFriendsOfNotreDameVideo(
//   filter: { node_locale: { eq: "en-US" } }
// ) {
//   edges {
//     node {
//       videoEmbedUrl
//       title
//       id
//       coverImage {
//         fluid(maxWidth: 800, maxHeight: 450) {
//           src
//           srcSet
//         }
//       }
//     }
//   }
// }
