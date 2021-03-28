// @ts-nocheck
import React, { useEffect, useRef } from "react"
import * as THREE from "./module/three"
import { APP } from "./module/app"
import { VRButton } from "./module/VRButton"

function ThreeDModel() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (container.current) {
      window.THREE = THREE // Used by APP Scripts.
      window.VRButton = VRButton // Used by APP Scripts.

      const body = container.current

      let player: any
      let loader = new THREE.FileLoader()

      loader.load("/threejs/app.json", function (text) {
        player = new APP.Player({})

        player.load(JSON.parse(text))
        player.setSize(body.clientWidth, body.clientHeight)
        player.play()

        body.appendChild(player.dom)

        window.addEventListener("resize", function () {
          player.setSize(body.clientWidth, body.clientHeight)
        })
      })

      return () => {
        if (player) {
          console.log("destroy previous player:", player)
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
