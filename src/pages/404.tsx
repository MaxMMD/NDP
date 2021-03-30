import React from "react"
import { graphql, PageProps } from "gatsby"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph, Subheading } from "../components/Typography"
import { PseudoButton } from "../components/FormElements"
import { BasicPagePropsData } from "../types"

export default function Donate({ data }: PageProps<BasicPagePropsData>) {
  return (
    <Root
      className="about-page page bg-black text-white"
      title={`Donate | ${data.site.siteMetadata.title}`}
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
    >
      <div className="container mx-auto text-white py-6">
        <Block className="lg:w-2/3">
          <Subheading tag="h1">404 Page Not Found</Subheading>
          <Paragraph.Base className="lg:w-1/2">
            We're sorry, the page you're looking for couldn't be found. Please
            double-check the URL in the address bar.
          </Paragraph.Base>
          <Spacer />
          <PseudoButton href="/">Return to home</PseudoButton>
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
      pageName: { eq: "404" }
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
