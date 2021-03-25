import React from "react"
import cx from "classnames"
import Link from "./Link"
import { Paragraph } from "./Typography"
import { PseudoButton } from "./FormElements"
import SocialLinks from "./SocialLinks"
import { Spacer } from "./Layout"

function Footer(props: { className?: string }) {
  return (
    <footer className={cx("Footer container mx-auto", props.className)}>
      <div className="mx-8 lg:mx-16 flex py-20 border-t border-gray-200 justify-center items-center">
        <PseudoButton>Donate</PseudoButton>
      </div>
      <div className="mx-8 lg:mx-16 flex flex-col md:flex-row border-t border-gray-200 py-8 justify-between">
        <div className="pr-32">
          <Paragraph.Medium>About</Paragraph.Medium>
          <Paragraph.Small>
            Fugiat in qui consectetur cillum in ut consectetur ea. Sint ea nulla
            ad do sint ex veniam. Esse aliquip ut eu magna nulla tempor duis
            irure nulla cillum laboris.
          </Paragraph.Small>
        </div>
        <div className="pr-32">
          <Paragraph.Medium>Contact</Paragraph.Medium>
          <Paragraph.Small>
            Fugiat in qui consectetur cillum in ut consectetur ea. Sint ea nulla
            ad do sint ex veniam. Esse aliquip ut eu magna nulla tempor duis
            irure nulla cillum laboris.
          </Paragraph.Small>
        </div>
        <div className="pr-32">
          <Paragraph.Medium>Social</Paragraph.Medium>
          <Spacer className="mt-4" />
          <SocialLinks alignment="left" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
