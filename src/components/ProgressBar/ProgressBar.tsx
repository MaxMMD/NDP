import React from "react"
import cx from "classnames"

interface Props {
  width: number
  className?: string
}

function ProgressBar(props: Props) {
  return (
    <div
      className={cx(
        "ProgressBar relative h-3 rounded overflow-hidden border border-gray-700 bg-white bg-opacity-10",
        props.className
      )}
    >
      <div
        className="Progress__inner bg-white h-3 absolute top-0 left-0 transition-all duration-1000"
        style={props.width ? { width: `${props.width}%` } : { width: "0%" }}
      />
    </div>
  )
}

export default ProgressBar
