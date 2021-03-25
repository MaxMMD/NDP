import React, { ImgHTMLAttributes, useEffect, useRef, useState } from "react"
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
  const imageRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  const shouldDisplay = loaded && isVisible

  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true)
  }, [])

  return (
    <div className={cx(containerClassName, "relative")}>
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
        {!shouldDisplay ? <Spinner /> : null}
      </div>
      <img
        ref={imageRef}
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
