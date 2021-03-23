import React from "react"
import Link from "../components/Link"
import Root from "../components/Root"
import { Spacer, Block } from "../components/Layout"
import CardGrid from "../components/CardGrid"
import Icon from "../components/Icon"
import FeatureItem from "../components/FeatureItem"
import { convertJsonToCards, generateCards } from "../fixtures/data-generators"
import { PageProps } from "gatsby"

export default function Artefact({ pageContext }: PageProps<any>) {
  const { title, relatedArtefacts } = pageContext as any
  const cards = convertJsonToCards(relatedArtefacts.data)
  return (
    <Root
      className="artefact-page page bg-black text-white"
      title="Artefact | Friends of Notre Dame"
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
      showFrame
    >
      <div className="container mx-auto text-white py-6">
        <Block padding="none" className="text-lg font-light -mt-2">
          <Link href="/gallery">Gallery</Link>
          <span className="inline-block px-2">&gt;</span>
          <span className="font-normal">Name of Artifact</span>
        </Block>

        <Spacer />

        <Block padding="narrow">
          <FeatureItem progress={66} title={title} />
        </Block>

        <Spacer className="mt-16 lg:mt-32" />

        {cards.length ? (
          <>
            <Block>
              <CardGrid items={cards} carousel />
            </Block>

            <Spacer className="mt-10 lg:mt-20" />

            <Block className="flex justify-end border-t border-gray-200 pt-8 pb-4">
              <Link href="/gallery" className="text-2xl font-light">
                See more <Icon.Chevron className="inline-block" />
              </Link>
            </Block>
          </>
        ) : null}
      </div>
    </Root>
  )
}
