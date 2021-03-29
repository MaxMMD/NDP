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
              />
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
              Lorem in exercitation elit esse minim fugiat. Pariatur
              exercitation ex ipsum tempor enim proident. Nulla aliquip ad ipsum
              amet duis consequat duis sint enim cupidatat.
            </Paragraph.Base>
            <Paragraph.Base>
              Est ad non commodo occaecat incididunt aliqua enim ipsum consequat
              labore anim. Officia fugiat proident tempor ut nisi laborum
              excepteur tempor ullamco aliquip anim irure.
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
            Eiusmod sit duis esse sit. Cillum nisi magna occaecat consequat
            incididunt occaecat eu occaecat laboris cupidatat ut anim nostrud
            ullamco.
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
            Eiusmod sit duis esse sit. Cillum nisi magna occaecat consequat
            incididunt occaecat eu occaecat laboris cupidatat ut anim nostrud
            ullamco.
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
          "Screen 1. Irure mollit exercitation voluptate id esse nulla eiusmod. Nostrud commodo irure occaecat labore. Amet irure commodo minim anim cillum cupidatat enim ipsum magna proident commodo exercitation.",
          "Screen 2. Elit esse pariatur laboris quis id velit.",
          "Screen 3. Et cillum deserunt consequat cupidatat veniam dolore. Excepteur labore elit deserunt minim dolore elit ex. Ad enim elit ex velit velit ea mollit et enim.",
        ]}
        isVisibleOnLoad
        onClose={() => {
          setTimeout(() => {
            setAutoFlipTrigger(Date.now())
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
  }
`
