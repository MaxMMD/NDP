import { withPrefix } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

function MetaTags() {
  return (
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix("/apple-touch-icon.png?t=10022021")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix("/favicon-32x32.png?t=10022021")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix("/favicon-16x16.png?t=10022021")}
      />
      <link rel="manifest" href={withPrefix("/site.webmanifest?t=10022021")} />
      <link
        rel="mask-icon"
        href={withPrefix("/safari-pinned-tab.svg?t=10022021")}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Helmet>
  )
}

export default MetaTags
