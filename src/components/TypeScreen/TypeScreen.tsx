import React, { useEffect, useRef, useState } from "react"
import cx from "classnames"
import { Block, Spacer } from "../Layout"

export interface Props {
  text: string[]
  isVisibleOnLoad?: boolean
}

function TypeScreen(props: Props) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const hasDismissed =
    typeof window !== "undefined"
      ? sessionStorage?.getItem("fond-skip-intro")
      : false

  const [isGoingVisible, setIsGoingVisible] = useState(
    !!hasDismissed ? false : props.isVisibleOnLoad
  )

  const [isVisible, setIsVisible] = useState(
    !!hasDismissed ? false : props.isVisibleOnLoad
  )

  function onClose() {
    sessionStorage?.setItem("fond-skip-intro", "true")
    setIsGoingVisible(false)

    setTimeout(() => {
      setIsVisible(false)
    }, 700)
  }

  useEffect(() => {
    function showBlock(i = 0) {
      const p = textRef.current

      if (p && props.text[i]) {
        p.style.opacity = "1.0"
        addType(i)
      }
    }

    function addType(blockIndex = 0, n = 1) {
      const p = textRef.current

      if (p && props.text[blockIndex]) {
        if (n > props.text[blockIndex].length) {
          if (blockIndex + 1 >= props.text.length) {
            setTimeout(onClose, 1000)
            return
          }

          p.style.opacity = "0"

          setTimeout(() => {
            showBlock(blockIndex + 1)
          }, 700)
          return
        }

        const str = props.text[blockIndex].slice(0, n)
        p.innerHTML = str

        setTimeout(() => {
          addType(blockIndex, n + 1)
        }, 100)
      }
    }

    showBlock()
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={cx(
        "w-screen h-screen overflow-hidden fixed top-0 left-0 bg-black z-20 py-32 transition duration-1000",
        {
          "opacity-100": isGoingVisible,
          "opacity-0": !isGoingVisible,
        }
      )}
    >
      <div className="relative container mx-auto h-full flex items-center">
        <Block padding="narrow" className="mx-16 mr-0">
          <p
            ref={textRef}
            className="font-light text-2xl md:text-4xl leading-snug tracking-wide transition opacity-0 duration-1000"
          />
          <Spacer />
          <span
            onClick={() => onClose()}
            className="absolute bottom-0 right-32 font-light text-2xl md:text-4xl tracking-wide cursor-pointer"
          >
            Skip
          </span>
        </Block>
      </div>
    </div>
  )
}

export default TypeScreen
