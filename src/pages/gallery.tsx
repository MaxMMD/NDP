import { graphql, PageProps } from "gatsby"
import React, { useEffect, useState } from "react"
import { shuffle } from "lodash"
import CardGrid from "../components/CardGrid"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph } from "../components/Typography"
import Select from "../components/Select"
import { GalleryPagePropsData } from "../types"
import cardSorting from "../utils/card-sorting"

export default function Gallery({ data }: PageProps<GalleryPagePropsData>) {
  const cardData = data.allContentfulFriendsOfNotreDameArtefact.edges
  const [cards, setCards] = useState(cardData)
  const [sortMode, setSortMode] = useState("")

  useEffect(() => {
    let newCards = []

    switch (sortMode) {
      case "alpha-asc": {
        newCards = cardData.sort(cardSorting.alphaAsc)
        break
      }
      case "alpha-desc": {
        newCards = cardData.sort(cardSorting.alphaDesc)
        break
      }
      case "featured-asc": {
        newCards = cardData.sort(cardSorting.featured)
        break
      }
      case "random": {
        newCards = shuffle(cardData)
        break
      }
      default:
        newCards = cardData
    }

    console.log(newCards[0].node.title, cards[0].node.title)

    setCards(newCards)
  }, [sortMode])

  function handleOnChange(e: any) {
    setSortMode(e.target.value)
  }

  console.log({ sortMode, cards })

  return (
    <Root
      className="gallery-page page bg-black text-white"
      title="Gallery | Friends of Notre Dame"
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
      showFrame
    >
      <div className="container mx-auto text-white py-6">
        <Block padding="none">
          <Paragraph.Base className="lg:w-1/2">
            Laborum cillum officia commodo quis. Reprehenderit exercitation do
            deserunt ipsum nostrud deserunt reprehenderit sunt. Ipsum proident
            veniam nulla officia dolore incididunt culpa nisi ea sint. Amet sit
            excepteur ut aute proident amet ad.
          </Paragraph.Base>
        </Block>

        <Spacer className="mt-6 lg:mt-12" />

        <Block padding="none">
          <div className="lg:w-1/5">
            <Select
              onChange={handleOnChange}
              options={[
                { label: "Sort", value: "" },
                { label: "A-z", value: "alpha-asc" },
                { label: "Z-a", value: "alpha-desc" },
                { label: "Featured", value: "featured-asc" },
                { label: "Random", value: "random" },
              ]}
            />
          </div>
        </Block>

        <Spacer />

        <Block>
          <CardGrid items={cards} />
        </Block>

        <Spacer />
      </div>
    </Root>
  )
}

export const query = graphql`
  query GalleryJSONDataQuery {
    allContentfulFriendsOfNotreDameArtefact(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          slug
          title
          id
          restorationProgress
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
  }
`
