import React from "react"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph, Subheading } from "../components/Typography"
import { graphql, PageProps } from "gatsby"
import { BasicPagePropsData } from "../types"
import Link from "../components/Link"
import GiveLivelyWidget from "../components/GiveLivelyWidget"

export default function Donate({ data }: PageProps<BasicPagePropsData>) {
  return (
    <Root
      className="about-page page bg-black text-white"
      title={`Donate | ${data.site.siteMetadata.title}`}
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
    >
      <div className="container mx-auto text-white py-6">
        <Block>
          <Subheading tag="h1">Donate</Subheading>

          <Paragraph.Base>
            Through a general donation to the Friends of Notre-Dame de Paris,
            you become an integral part of the future of the Cathedral. The
            restoration needs all of our help to remain a persistent part of our
            global culture for years to come.
          </Paragraph.Base>

          <Paragraph.Base>
            If you’d like to donate to a specific artifact in the collection,
            please <Link href="/gallery">visit this page</Link>.
          </Paragraph.Base>
        </Block>

        <Spacer />

        <Block>
          <GiveLivelyWidget />
        </Block>

        <Spacer className="mt-16" />
      </div>
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
    contentfulFriendsOfNotreDamePage(
      pageName: { eq: "Donate" }
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
