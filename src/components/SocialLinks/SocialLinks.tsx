import React from "react"
import cx from "classnames"
import Icon from "../Icon"

interface Props {
  className?: string
  alignment?: "left" | "right" | "center"
  links: {
    twitter: string
    facebook: string
    instagram: string
  }
}

const platforms = [
  {
    id: "facebook",
    comp: Icon.Facebook,
  },
  {
    id: "twitter",
    comp: Icon.Twitter,
  },
  { id: "instagram", comp: Icon.Instagram },
]

function SocialLinks(props: Props) {
  const links: any = props.links || {}
  return (
    <div className={cx("SocialLinks flex", props.className)}>
      {platforms.map((Comp, i) => (
        <a
          key={Comp.id}
          href={links?.[Comp.id]}
          className={cx(
            "border rounded-full border-white h-10 w-10 inline-flex justify-center items-center",
            {
              "ml-2": props.alignment === "right",
              "mr-2": props.alignment === "left",
              "mx-1": props.alignment === "center",
            }
          )}
        >
          <Comp.comp width={20} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
