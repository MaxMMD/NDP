import React, { useEffect } from "react"

export interface Props {
  widgetSrc: string
}

const URL_BASE = "https://secure.givelively.org/donate/"

function getPagePathFromWidgetSrc(widgetSrc: string) {
  const [preQueryString] = widgetSrc.split("?")
  const withoutTrailingSlash = preQueryString.replace(/\/$/, "")
  const pathOnly = withoutTrailingSlash.replace(URL_BASE, "")

  return pathOnly
}

function GiveLivelyWidget(props: Props) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const id = `gively-widget-${Date.now()}`
    const gl = document.createElement("script")
    gl.id = id
    gl.src = `https://secure.givelively.org/widgets/branded_donation/${getPagePathFromWidgetSrc(
      props.widgetSrc
    )}.js`
    document.getElementsByTagName("head")[0].appendChild(gl)

    return () => {
      const script = document.getElementById(id)
      script?.remove()
    }
  }, [props.widgetSrc])

  return (
    <div
      data-widget-src={`${props.widgetSrc}?ref=sd_widget`}
      id="give-lively-widget"
      className="gl-branded-donation-widget"
    ></div>
  )
}

export default GiveLivelyWidget
