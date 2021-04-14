import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Subheading } from "../components/Typography"
import { graphql, PageProps } from "gatsby"
import { BasicPagePropsData, ContentfulPagePropsData } from "../types"
import GiveLivelyWidget from "../components/GiveLivelyWidget"

export default function Donate({
  data,
}: PageProps<BasicPagePropsData & ContentfulPagePropsData>) {
  const page = data.contentfulFriendsOfNotreDamePage
  return (
    <Root
      className="about-page page bg-black text-white"
      title={`Donate | ${data.site.siteMetadata.title}`}
      description={data?.site?.siteMetadata?.description}
    >
      <div className="container mx-auto text-white py-6">
        <Block>
          <Subheading tag="h1">Donate</Subheading>
          <MDXRenderer>{page?.introduction?.childMdx?.body || ""}</MDXRenderer>
        </Block>

        <Spacer />

        <Block>
          <GiveLivelyWidget widgetSrc={data.site.siteMetadata.donationLink} />
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
        description
        donationLink
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
