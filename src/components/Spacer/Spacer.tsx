import React from "react"
import cx from "classnames"

export interface Props {
  className?: string
}

function Spacer(props: Props) {
  return (
    <div
      className={cx(
        "Spacer w-full overflow-hidden",
        props.className || "mt-16"
      )}
    />
  )
}

export default Spacer
