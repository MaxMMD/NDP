import React from "react"
import CardGrid from "../components/CardGrid"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph } from "../components/Typography"
import { generateCards } from "../fixtures/data-generators"

export default function Gallery() {
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

        <Spacer />

        <Block>
          <CardGrid items={generateCards(25)} />
        </Block>

        <Spacer />
      </div>
    </Root>
  )
}
