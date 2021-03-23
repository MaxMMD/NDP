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
import { convertJsonToCards } from "../fixtures/data-generators"

export default function Home({ data }: PageProps) {
  const [autoFlipTrigger, setAutoFlipTrigger] = useState<number | null>(null)
  const cards = convertJsonToCards(data)

  return (
    <Root
      className="homepage page bg-black text-white"
      title="Friends of Notre Dame"
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
      showFrame
    >
      <div className="container mx-auto text-white py-6">
        <Block
          padding="narrow"
          className="flex flex-wrap lg:flex-nowrap justify-between"
        >
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <Puzzle triggerAutoFlip={autoFlipTrigger} />
          </div>
          <div className="w-full lg:w-1/2 mt-16 lg:pl-32">
            <Title className="text-justify">
              Friends of
              <br />
              Notre-Dame
              <br />
              de Paris
            </Title>
            <Paragraph.Base>
              Lorem in exercitation elit esse minim fugiat. Pariatur
              exercitation ex ipsum tempor enim proident. Nulla aliquip ad ipsum
              amet duis consequat duis sint enim cupidatat commodo pariatur.
              Veniam cupidatat id cillum dolore. Aute ullamco minim proident id.
              Cupidatat ad anim cupidatat consectetur ex.
            </Paragraph.Base>
            <Paragraph.Base>
              Est ad non commodo occaecat incididunt aliqua enim ipsum consequat
              labore anim. Officia fugiat proident tempor ut nisi laborum
              excepteur tempor ullamco aliquip anim irure. Incididunt aliqua
              sint amet officia elit duis esse minim.
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
          <Link href="/progress">
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
            <VideoCard className="p-2" />
            <VideoCard className="p-2" />
            <VideoCard className="p-2" />
          </div>
        </Block>

        <Spacer />
      </div>

      <TypeScreen
        text={[
          "Screen 1. Irure mollit exercitation voluptate id esse nulla eiusmod. Nostrud commodo irure occaecat labore. Amet irure commodo minim anim cillum cupidatat enim ipsum magna proident commodo exercitation.",
          "Screen 2. Elit esse pariatur laboris quis id velit.",
          "Screen 3. Et cillum deserunt consequat cupidatat veniam dolore. Excepteur labore elit deserunt minim dolore elit ex. Ad enim elit ex velit velit ea mollit et enim.",
        ]}
        isVisibleOnLoad
        onClose={() => {
          setAutoFlipTrigger(Date.now())
          console.log("The intro screen is now closed!")
        }}
      />
    </Root>
  )
}

export const query = graphql`
  query JSONDataQuery {
    allArtefactsJson {
      edges {
        node {
          id
          slug
          title
          progress
          image {
            src
            width
            height
          }
        }
      }
    }
  }
`
