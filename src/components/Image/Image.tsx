import React, { ImgHTMLAttributes, useRef, useState } from "react"
import cx from "classnames"
import Spinner from "../Spinner"

interface Props
  extends React.DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  containerClassName?: string
  isVisible?: boolean
}

function Image({
  containerClassName,
  className,
  isVisible = true,
  ...imgProps
}: Props) {
  const [loaded, setLoaded] = useState(false)

  const shouldDisplay = loaded && isVisible

  return (
    <div className={cx(containerClassName, "relative")}>
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
        {!shouldDisplay ? <Spinner /> : null}
      </div>
      <img
        onLoad={() => {
          setLoaded(true)
        }}
        className={cx("Image", className, {
          invisible: !shouldDisplay,
        })}
        {...imgProps}
      />
    </div>
  )
}

export default Image
