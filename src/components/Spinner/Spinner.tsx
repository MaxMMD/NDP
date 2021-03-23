import React from "react"
import cx from "classnames"
import framepng from "../../assets/fond_frame.png"

interface Props {
  className?: string
  animate?: boolean
}

function Spinner({ animate = true, className }: Props) {
  return (
    <div className={className}>
      <img
        className={cx("opacity-50", { "animate-spin": animate })}
        src={framepng}
        width={50}
        height={50}
      />
    </div>
  )
}

export default Spinner
