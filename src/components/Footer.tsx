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
      <div className="mx-8 lg:mx-16 flex flex-col md:flex-row border-t border-gray-200 py-8 md:py-16 justify-between">
        <div className="mb-6 md:mb-0 md:pr-32 md:w-1/3">
          <Paragraph.Medium>About</Paragraph.Medium>
          <Paragraph.Small>
            Friends of Notre-Dame de Paris is the official 501 (c)(3) charity
            leading the international fundraising efforts to rebuild and restore
            Notre-Dame Cathedral.
          </Paragraph.Small>
        </div>
        <div className="mb-6 md:mb-0 md:pr-32 md:w-1/3">
          <Paragraph.Medium>Contact</Paragraph.Medium>
          <Paragraph.Small>
            friends@notredamedeparis.fr
            <br />
            1717 Pennsylvania Ave NW,
            <br />
            Suite 425,
            <br />
            Washington,
            <br />
            DC 20006
            <br />
            &copy;2021 Friends of Notre-Dame de Paris
          </Paragraph.Small>
        </div>
        <div className="mb-6 md:mb-0 md:pr-32 md:w-1/3">
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
