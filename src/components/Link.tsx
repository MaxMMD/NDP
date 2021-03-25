import React from "react"
import { Link as GatsbyLink } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { slideToTargetElement } from "../utils/dom-utils"

function Link({
  href,
  children,
  onClick,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  function handleOnClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (event && event.currentTarget) {
      const anchorLink = event.currentTarget as HTMLAnchorElement
      const targetUrl = new URL(anchorLink.href)
      if (targetUrl.hash) {
        event.preventDefault()
        slideToTargetElement(targetUrl.hash)
      }
    }
    if (onClick) {
      onClick(event)
    }
  }

  if (href && href !== "/" && href.startsWith("/")) {
    return (
      <AniLink
        className={props.className}
        cover
        direction="up"
        bg="#fff"
        to={href}
      >
        {children}
      </AniLink>
    )
  }

  return (
    <a
      className={props.className}
      onClick={handleOnClick}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
