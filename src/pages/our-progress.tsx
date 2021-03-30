import { graphql, PageProps } from "gatsby"
import React from "react"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph } from "../components/Typography"
import VideoCard from "../components/VideoCard"
import { VideoPagePropsData } from "../types"
import Link from "../components/Link"

export default function Progress({ data }: PageProps<VideoPagePropsData>) {
  const videos = data.allContentfulFriendsOfNotreDameVideo.edges
  return (
    <Root
      className="progress-page page bg-black text-white"
      title="Our Progress | Friends of Notre Dame"
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
      showFrame
    >
      <div className="container mx-auto text-white py-6">
        <Block>
          <Paragraph.Base className="lg:w-1/2">
            Get a behind the scenes look and track the progress of the
            restoration of the Notre-Dame Cathedral. Updates will be made
            regularly, in the meantime, <Link href="/gallery">learn more</Link>{" "}
            about the artifacts currently being restored or{" "}
            <Link href="#">make a donation</Link>.
          </Paragraph.Base>
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
    allContentfulFriendsOfNotreDameVideo(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          videoEmbedUrl
          title
          id
          coverImage {
            fluid(maxWidth: 800, maxHeight: 450) {
              src
              srcSet
            }
          }
        }
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
