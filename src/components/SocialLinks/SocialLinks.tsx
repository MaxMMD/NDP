import React from "react"
import cx from "classnames"
import Icon from "../Icon"

interface Props {
  className?: string
  alignment?: "left" | "right" | "center"
}

const platforms = [Icon.Facebook, Icon.Twitter, Icon.Instagram]

function SocialLinks(props: Props) {
  return (
    <div className={cx("SocialLinks flex", props.className)}>
      {platforms.map((Comp, i) => (
        <a
          key={i}
          href="#"
          className={cx(
            "border rounded-full border-white h-10 w-10 inline-flex justify-center items-center",
            {
              "ml-2": props.alignment === "right",
              "mr-2": props.alignment === "left",
              "mx-1": props.alignment === "center",
            }
          )}
        >
          <Comp width={20} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
