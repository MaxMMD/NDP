import React, { useEffect, useRef, useState } from "react"
import cx from "classnames"
import { Block, Spacer } from "../Layout"
import Puzzle from "../Puzzle"
import { shuffle } from "lodash"
import TestSvg from "../TestSvg"

export interface Props {
  text: string[]
  isVisibleOnLoad?: boolean
  onClose: () => void
}

const TYPE_SPEED = 50
const TRANSITION_OUT_DELAY = 1500
const TRANSITION_IN_DELAY = 700

function TypeScreen(props: Props) {
  const textRef = useRef<HTMLParagraphElement>(null)
  const puzzleContainerRef = useRef<HTMLDivElement>(null)
  const [isGoingVisible, setIsGoingVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const totalTypeScreenDuration = props.text.reduce((prev, current) => {
    const textCompleteDuration = current.length * TYPE_SPEED
    return prev + textCompleteDuration + TRANSITION_OUT_DELAY
  }, 0)

  function onClose() {
    sessionStorage?.setItem("fond-skip-intro", "true")
    setIsGoingVisible(false)
    setTimeout(() => {
      setIsVisible(false)
      props.onClose()
    }, 700)
  }

  useEffect(() => {
    const hasDismissed =
      typeof window !== "undefined"
        ? sessionStorage?.getItem("fond-skip-intro")
        : false

    if (hasDismissed || !props.isVisibleOnLoad) {
      props.onClose()
      return
    }

    setIsVisible(true)

    setTimeout(() => {
      setIsGoingVisible(true)
    }, 700)
  }, [props.isVisibleOnLoad])

  useEffect(() => {
    if (isVisible) {
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.height = "auto"
      document.body.style.overflow = "auto"
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) {
      return
    }

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

          setTimeout(() => {
            p.style.opacity = "0"

            setTimeout(() => {
              showBlock(blockIndex + 1)
            }, TRANSITION_IN_DELAY)
          }, TRANSITION_OUT_DELAY)

          return
        }

        const str = props.text[blockIndex].slice(0, n)
        p.innerHTML = str

        setTimeout(() => {
          addType(blockIndex, n + 1)
        }, TYPE_SPEED)
      }
    }

    showBlock()
  }, [isVisible])

  useEffect(() => {
    //!: Pieces animation
    if (!isVisible || !puzzleContainerRef.current) {
      return
    }
    const pieces = shuffle([
      ...(puzzleContainerRef.current.querySelectorAll(".PuzzlePiece") as any),
    ])
    const len = pieces.length
    const initialSpeed = totalTypeScreenDuration / len
    pieces.forEach((piece: any, i: number) => {
      piece.style.opacity = "0"
      piece.style.transition = `opacity 1s ease-in-out`
      setTimeout(() => {
        piece.style.opacity = "1.0"
      }, initialSpeed * i)
    })
    //!: Scale animation
    // if (!isVisible || !puzzleContainerRef.current) {
    //   return
    // }

    // const container: any = puzzleContainerRef.current.querySelector(
    //   ".TestSvg__container"
    // )

    // container.style.transform = "scale(3)"
    // container.style.transformOrigin = "center center"
    // container.style.opacity = 0.15

    // setTimeout(() => {
    //   container.style.transition = `all ${totalTypeScreenDuration}ms linear`
    //   container.style.transform = "scale(0.3)"
    //   container.style.opacity = 0.6
    // }, 20)
  }, [isVisible])

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
      <div
        ref={puzzleContainerRef}
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full opacity-30 flex items-center"
      >
        {/* <div className="TestSvg__container w-full h-full flex items-center">
          <TestSvg />
        </div> */}
        <Puzzle disableAutoFlip />
      </div>
      <div className="relative container mx-auto h-full flex items-center">
        <Block padding="narrow" className="lg:ml-16 lg:mr-0">
          <p
            ref={textRef}
            className="font-light text-2xl md:text-4xl leading-snug tracking-wide transition opacity-0 duration-1000"
          />
          <Spacer />
          <span
            onClick={() => onClose()}
            className="absolute bottom-0 right-8 lg:right-32 font-light text-xl md:text-3xl tracking-wide cursor-pointer"
          >
            Continue
          </span>
        </Block>
      </div>
    </div>
  )
}

export default TypeScreen
