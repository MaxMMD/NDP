import React from "react"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Title } from "../components/Typography"

import { graphql, PageProps } from "gatsby"
import { BasicPagePropsData } from "../types"

export default function Donate({ data }: PageProps<BasicPagePropsData>) {
  return (
    <Root
      className="about-page page bg-black text-white"
      title={`Donate | ${data.site.siteMetadata.title}`}
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
    >
      <div className="container mx-auto text-white py-6">
        <Block className="md:flex">
          <Title>Donate Embed Goes Here?</Title>
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
