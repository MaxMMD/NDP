import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import Root from "../components/Root"
import { Block, Spacer } from "../components/Layout"
import { Paragraph, Subheading } from "../components/Typography"
import Image from "../components/Image"
import { PseudoButton } from "../components/FormElements"
import SocialLinks from "../components/SocialLinks"
import { graphql, PageProps } from "gatsby"
import { BasicPagePropsData, ContentfulPagePropsData } from "../types"

export default function About({
  data,
}: PageProps<ContentfulPagePropsData & BasicPagePropsData>) {
  const { introduction, image } =
    data.allContentfulFriendsOfNotreDamePage?.edges?.[0]?.node || {}
  const body = introduction?.childMdx?.body

  return (
    <Root
      className="about-page page bg-black text-white"
      title={`About | ${data.site.siteMetadata.title}`}
      description="Nostrud ullamco aute elit duis culpa aliqua amet occaecat irure."
    >
      <div className="container mx-auto text-white py-6">
        <Block className="md:flex">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            {image && image.fluid ? (
              <Image
                containerClassName="aspect-ratio aspect-ratio-1:1"
                className="w-full h-full object-cover"
                {...image.fluid}
                width={1650}
                height={1100}
              />
            ) : null}
          </div>
          <div className="md:w-1/2 md:pl-8 lg:pl-32">
            <div>
              {body ? (
                <MDXProvider
                  components={{
                    h1: Subheading,
                    h2: Subheading,
                    p: ({ children }: any) => (
                      <Paragraph.Base className="mb-6 mt-2">
                        {children}
                      </Paragraph.Base>
                    ),
                  }}
                >
                  <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
              ) : null}
            </div>

            <Spacer className="mt-16" />

            <div className="flex flex-col flex-wrap items-end">
              <Subheading>Follow us</Subheading>

              <Spacer className="mt-4" />

              <SocialLinks alignment="right" />

              <Spacer />

              <PseudoButton href="#">Donate</PseudoButton>
            </div>
          </div>
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
    allContentfulFriendsOfNotreDamePage(
      filter: { pageName: { eq: "About" }, node_locale: { eq: "en-US" } }
      limit: 1
    ) {
      edges {
        node {
          pageTitle
          introduction {
            childMdx {
              body
            }
          }
          image {
            fluid(maxHeight: 1100, maxWidth: 1650) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
