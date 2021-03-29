import { withPrefix } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

function MetaTags() {
  return (
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix("/apple-touch-icon.png?t=10022022")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix("/favicon-32x32.png?t=10022022")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix("/favicon-16x16.png?t=10022022")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href={withPrefix("/android-chrome-192x192.png?t=10022022")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href={withPrefix("/android-chrome-512x512.png?t=10022022")}
      />
      <link rel="manifest" href={withPrefix("/site.webmanifest?t=10022022")} />
      <meta name="msapplication-TileColor" content="#000" />
      <meta name="theme-color" content="#000"></meta>
    </Helmet>
  )
}

export default MetaTags
