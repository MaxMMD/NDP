import React from "react"
import Link from "../components/Link"
import Root from "../components/Root"
import { Spacer, Block } from "../components/Layout"
import CardGrid from "../components/CardGrid"
import Icon from "../components/Icon"
import FeatureItem from "../components/FeatureItem"
import { PageProps } from "gatsby"
import { ArtefactType, BasicPagePropsData } from "../types"

interface Props extends BasicPagePropsData {
  node: ArtefactType
  page: BasicPagePropsData
}

export default function Artefact({ pageContext }: PageProps<any, Props>) {
  const {
    slug,
    title,
    description,
    images: resizedImages,
    restorationProgress,
    restorationComplete,
    campaignPageUrl,
    related = [],
  } = pageContext.node

  const body = description?.childMdx?.body || ""
  const excerpt =
    description?.childMdx?.excerpt || pageContext.site.siteMetadata.description
  const images = resizedImages?.map(r => r.resize) || []
  const seoImageSrc = resizedImages?.map(r => r.fixed)?.[0]?.src
  const cards = related?.map(r => ({ node: r })) || []

  return (
    <Root
      className="artefact-page page bg-black text-white"
      title={`${title} | Friends of Notre-Dame de Paris`}
      description={excerpt}
      image={seoImageSrc}
      showFrame
    >
      <div className="container mx-auto text-white py-6">
        <Block padding="none" className="text-lg font-light -mt-2">
          <Link href="/gallery">Gallery</Link>
          <span className="inline-block px-2">&gt;</span>
          <span className="font-normal">{title}</span>
        </Block>

        <Spacer />

        <Block padding="narrow">
          <FeatureItem
            id={slug}
            progress={restorationProgress}
            title={title}
            body={body}
            images={images}
            restorationComplete={restorationComplete}
            campaignPageUrl={campaignPageUrl}
          />
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
