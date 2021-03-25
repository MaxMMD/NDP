import { graphql, PageProps } from "gatsby"
import React, { useState } from "react"
import CardGrid from "../components/CardGrid"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph } from "../components/Typography"
import { convertJsonToCards } from "../fixtures/data-generators"
import Select from "../components/Select"
import { shuffle } from "lodash"
import { GalleryPagePropsData } from "../types"

export default function Gallery({ data }: PageProps<GalleryPagePropsData>) {
  const cardData = data.allContentfulFriendsOfNotreDameArtefact.edges
  const [cards, setCards] = useState(cardData)

  function handleOnChange(e: any) {
    if (e.target.value) {
      setCards(shuffle(cards))
    }
  }

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

        <div className="lg:w-1/5">
          <Select
            onChange={handleOnChange}
            options={[
              { label: "Sort", value: "" },
              { label: "A-z", value: "alpha-asc" },
              { label: "Z-a", value: "alpha-desc" },
              { label: "Donations", value: "donations-desc" },
              { label: "Featured", value: "featured-asc" },
            ]}
          />
        </div>

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
