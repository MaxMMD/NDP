import React from "react"
import ImageLayouts, { Props } from "./components/ImageLayouts"

function FeaturedImages(props: Props) {
  const images = props.images || []
  const len = images.length

  function getComponent() {
    if (len > 4) {
      return ImageLayouts[4]
    }

    return ImageLayouts[len]
  }

  const Comp = getComponent()

  return <Comp images={images} />
}

export default FeaturedImages
