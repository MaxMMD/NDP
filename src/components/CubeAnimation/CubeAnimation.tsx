// @ts-nocheck
import React, { useEffect, useRef } from "react"
import { FileLoader } from "three"
import { APP } from "./module/app"

function ThreeDModel() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      const body = container.current

      let player: any
      let loader = new FileLoader()

      loader.load("/threejs/app.json", function (text) {
        player = new APP.Player({})

        player.load(JSON.parse(text))
        player.setSize(body.clientWidth, body.clientHeight)
        player.play()

        body.appendChild(player.dom)

        window.addEventListener("resize", () => {
          player.setSize(body.clientWidth, body.clientHeight)
        })
      })

      return () => {
        if (player) {
          player.stop()
          player.dispose()
          container.current.innerHTML = ""
        }
      }
    }
  }, [container])

  return (
    <div
      id="container"
      ref={container}
      className="bg-black w-screen h-screen overflow-hidden"
    ></div>
  )
}

export default ThreeDModel
