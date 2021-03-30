import { graphql, PageProps } from "gatsby"
import React, { useState } from "react"
import CardGrid from "../components/CardGrid"
import Icon from "../components/Icon"
import Link from "../components/Link"
import Puzzle from "../components/Puzzle"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph, Subheading, Title } from "../components/Typography"
import VideoCard from "../components/VideoCard"
import TypeScreen from "../components/TypeScreen"
import {
  BasicPagePropsData,
  GalleryPagePropsData,
  VideoPagePropsData,
} from "../types"
import { PseudoButton } from "../components/FormElements"
import logo from "../assets/fond-logo.png"
import infoIcon from "../assets/fond-info.png"
import InfoPane from "../components/InfoPane"

export default function Home({
  data,
}: PageProps<GalleryPagePropsData & VideoPagePropsData & BasicPagePropsData>) {
  const [autoFlipTrigger, setAutoFlipTrigger] = useState<number | null>(null)
  const [showInfoPane, setShowInfoPane] = useState(false)
  const cards = data.allContentfulFriendsOfNotreDameArtefact.edges
  const videos = data.allContentfulFriendsOfNotreDameVideo.edges

  return (
    <Root
      className="homepage page bg-black text-white"
      title={data.site.siteMetadata.title}
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
      showFrame
    >
      <div className="container mx-auto text-white py-6">
        <Block
          padding="narrow"
          className="flex flex-wrap lg:flex-nowrap justify-between"
        >
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative">
              <Puzzle triggerAutoFlip={autoFlipTrigger} />
              <span
                onClick={() => {
                  setShowInfoPane(!showInfoPane)
                }}
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-black rounded-full cursor-pointer"
              >
                <img src={infoIcon} width={44} height={44} alt="Info" />
              </span>
              <InfoPane
                isVisible={showInfoPane}
                className="absolute bottom-8 left-1/2 w-3/4 transform -translate-x-1/2"
                onClick={() => setShowInfoPane(false)}
              >
                <Paragraph.Base>
                  Hover the image to discover each piece of work and to explore
                  the puzzle. Each piece represents an artifact within the
                  cathedral that needs restoration.
                </Paragraph.Base>
              </InfoPane>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0 xl:mt-16 lg:pl-16 xl:pl-32">
            <div>
              <Title className="text-justify hidden">
                Friends of
                <br />
                Notre-Dame
                <br />
                de Paris
              </Title>
              <img
                className="md:w-1/2 lg:w-full mb-8 block"
                src={logo}
                width={949}
                height={341}
                alt="Friends of Notre-Dame de Paris"
              />
            </div>

            <Paragraph.Base>
              Our organization was established in 2017 to support the
              preservation of the Notre-Dame Cathedral. The cathedral was in
              desperate need of attention and infrastructure repairs, so we made
              it our mission to provide the support for this internationally
              beloved monument.
            </Paragraph.Base>
            <Paragraph.Base>
              Our mission, however, changed in 2019 with the tragic fire that
              set the cathedral ablaze. We are now determined to restore,
              rebuild, and preserve the cathedral. And we would love your help.
            </Paragraph.Base>
          </div>
        </Block>

        <Spacer className="mt-16 lg:mt-32" />

        <Block className="flex justify-between items-end pb-6 border-b border-gray-600">
          <Subheading>Gallery</Subheading>
          <Link href="/gallery">
            See more <Icon.Chevron className="inline-block" />
          </Link>
        </Block>

        <Block>
          <Paragraph.Base className="lg:w-1/2">
            Track the restoration progress of each artifact within the
            Notre-Dame Cathedral. Click through to learn more about each
            artifact and to make a donation.
          </Paragraph.Base>
          <CardGrid items={cards} carousel />
        </Block>

        <Spacer className="mt-16 lg:mt-32" />

        <Block className="flex justify-between items-end pb-6 border-b border-gray-600">
          <Subheading>Progress</Subheading>
          <Link href="/our-progress">
            See more <Icon.Chevron className="inline-block" />
          </Link>
        </Block>

        <Block>
          <Paragraph.Base className="lg:w-1/2">
            Get a behind the scenes look and track the progress of the
            restoration of the Notre-Dame Cathedral.
          </Paragraph.Base>

          <Spacer className="mt-4 lg:mt-8" />

          <div className="VideoGrid lg:flex -my-2 -mx-2">
            {videos.map(({ node }) => (
              <VideoCard
                key={node.id}
                className="p-2 lg:w-1/3 flex-grow-0"
                {...node}
              />
            ))}
          </div>
        </Block>

        <Spacer />

        <div className="mx-8 lg:mx-16 flex pt-20 pb-12 border-t border-gray-200 justify-center items-center">
          <PseudoButton>Donate</PseudoButton>
        </div>
      </div>

      <TypeScreen
        text={[
          "On April 15, 2019, the Notre-Dame Cathedral tragically caught fire.",
          "Since then, the Friends of Notre-Dame de Paris have been devoted to rebuilding, restoring, and preserving the rich history of the beloved Cathedral.",
          "This project is an opportunity for everyone, no matter where in the world, to become an integral part of piecing the puzzle back together.",
          "We invite you to explore the work to be done and we ask of you to contribute to the restoration while you do.",
        ]}
        isVisibleOnLoad
        onClose={() => {
          setTimeout(() => {
            setAutoFlipTrigger(Date.now())
            console.log("trigger autoflip")
          }, 200)
        }}
      />
    </Root>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        donationLink
      }
    }
    allContentfulFriendsOfNotreDameArtefact(
      limit: 16
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          slug
          title
          id
          restorationProgress
          restorationComplete
          images {
            resize(height: 488, width: 610) {
              width
              height
              src
            }
          }
        }
      }
    }
    allContentfulFriendsOfNotreDameVideo(
      limit: 3
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
      pageName: { eq: "Homepage" }
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
