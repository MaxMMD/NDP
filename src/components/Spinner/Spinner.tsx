import React from "react"
import framepng from "../../assets/fond_frame.png"

interface Props {
  className?: string
}

function Spinner(props: Props) {
  return (
    <div className={props.className}>
      <img
        className="opacity-50 animate-spin"
        src={framepng}
        width={50}
        height={50}
      />
    </div>
  )
}

export default Spinner
