import React from "react"
import cx from "classnames"
import Link from "./Link"
import { Paragraph } from "./Typography"
import { PseudoButton } from "./FormElements"
import SocialLinks from "./SocialLinks"
import { Spacer } from "./Layout"
import { BasicPagePropsData } from "../types"
import { graphql, useStaticQuery } from "gatsby"

function Footer(props: { className?: string }) {
  const data: BasicPagePropsData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialMedia {
            twitter
            instagram
            facebook
          }
        }
      }
    }
  `)

  return (
    <footer className={cx("Footer container mx-auto", props.className)}>
      <div className="mx-8 lg:mx-16 flex flex-col md:flex-row border-t border-gray-200 py-8 justify-between">
        <div className="mb-6 md:mb-0 md:pr-32">
          <Paragraph.Medium>About</Paragraph.Medium>
          <Paragraph.Small>
            Fugiat in qui consectetur cillum in ut consectetur ea. Sint ea nulla
            ad do sint ex veniam. Esse aliquip ut eu magna nulla tempor duis
            irure nulla cillum laboris.
          </Paragraph.Small>
        </div>
        <div className="mb-6 md:mb-0 md:pr-32">
          <Paragraph.Medium>Contact</Paragraph.Medium>
          <Paragraph.Small>
            Fugiat in qui consectetur cillum in ut consectetur ea. Sint ea nulla
            ad do sint ex veniam. Esse aliquip ut eu magna nulla tempor duis
            irure nulla cillum laboris.
          </Paragraph.Small>
        </div>
        <div className="mb-6 md:mb-0 md:pr-32">
          <Paragraph.Medium>Social</Paragraph.Medium>
          <Spacer className="mt-4" />
          <SocialLinks
            links={data.site.siteMetadata.socialMedia}
            alignment="left"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
