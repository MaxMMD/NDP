import React, { useEffect } from "react"

function GiveLivelyWidget() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const id = `gively-widget-${Date.now()}`
    const gl = document.createElement("script")
    gl.id = id
    gl.src =
      "https://secure.givelively.org/widgets/branded_donation/friends-of-notre-dame-de-paris-inc/humanity-rising-notre-dame-reborn.js"
    document.getElementsByTagName("head")[0].appendChild(gl)

    return () => {
      const script = document.getElementById(id)
      script?.remove()
    }
  }, [])

  return (
    <div
      data-widget-src="https://secure.givelively.org/donate/friends-of-notre-dame-de-paris-inc/humanity-rising-notre-dame-reborn?ref=sd_widget"
      id="give-lively-widget"
      className="gl-branded-donation-widget"
    ></div>
  )
}

export default GiveLivelyWidget
