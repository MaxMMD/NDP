import React from "react"
import framepng from "../../assets/fond_frame.png"

function Frame() {
  return (
    <div className="hidden lg:block w-screen h-screen fixed top-0 left-0 overflow-hidden pointer-events-none z-50">
      <div className="container mx-auto h-screen flex items-center justify-between">
        <img src={framepng} width={50} height={50} />
        <img src={framepng} width={50} height={50} />
      </div>
    </div>
  )
}

export default Frame
