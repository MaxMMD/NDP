import React, { useEffect, useRef, useState } from "react"
import cx from "classnames"
import { Block, Spacer } from "../Layout"
// import Puzzle from "../Puzzle"
// import { shuffle } from "lodash"
// import TestSvg from "../TestSvg"
import CubeAnimation from "../CubeAnimation"
import SoundFile from "../SoundFile"

export interface Props {
  text: string[]
  isVisibleOnLoad?: boolean
  onClose: () => void
}

// const TYPE_SPEED = 50
const TRANSITION_OUT_DELAY = 1500
const TRANSITION_IN_DELAY = 700

async function wait(ms: number) {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      resolve(timeout)
    }, ms)
  })
}

async function animateTextBlocks(
  textRef: React.RefObject<HTMLDivElement>,
  text: string[],
  onClose: () => void
) {
  if (!textRef.current) {
    return
  }
  function showBlock(i = 0) {
    const p = textRef.current

    if (p && text[i]) {
      p.style.opacity = "1.0"
      showParagraph(i)
    }
  }

  async function showParagraph(blockIndex = 0) {
    const p = textRef.current

    if (p && text[blockIndex]) {
      const str = text[blockIndex]
      p.innerHTML = str

      await wait(5000)
      await wait(TRANSITION_OUT_DELAY)

      p.style.opacity = "0"

      await wait(TRANSITION_IN_DELAY)

      showBlock(blockIndex + 1)
    }

    if (blockIndex + 1 >= text.length) {
      setTimeout(onClose, 500)
      return
    }
  }

  await wait(1000)
  showBlock()
}

function TypeScreen(props: Props) {
  const textRef = useRef<HTMLParagraphElement>(null)
  // const puzzleContainerRef = useRef<HTMLDivElement>(null)
  const [isGoingVisible, setIsGoingVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [displayFinalAnimation, setDisplayFinalAnimation] = useState(false)
  const [animationIsVisible, setAnimationIsVisible] = useState(false)

  // const totalTypeScreenDuration = props.text.reduce((prev, current) => {
  //   const textCompleteDuration = current.length * TYPE_SPEED
  //   return prev + textCompleteDuration + TRANSITION_OUT_DELAY
  // }, 0)

  async function onClose() {
    sessionStorage?.setItem("fond-skip-intro", "true")
    setDisplayFinalAnimation(true)
    await wait(500)
    setAnimationIsVisible(true)
    await wait(4000)
    setIsGoingVisible(false)
    await wait(700)
    setIsVisible(false)
    props.onClose()
  }

  async function animateIn() {
    setIsVisible(true)

    await wait(700)
    setIsGoingVisible(true)
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

    animateIn()
  }, [props.isVisibleOnLoad])

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("h-screen")
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("h-screen")
      document.body.classList.remove("overflow-hidden")
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) {
      return
    }

    animateTextBlocks(textRef, props.text, onClose)
  }, [isVisible])

  // useEffect(() => {
  //!: Pieces animation
  // if (!isVisible || !puzzleContainerRef.current) {
  //   return
  // }
  // const pieces = shuffle([
  //   ...(puzzleContainerRef.current.querySelectorAll(".PuzzlePiece") as any),
  // ])
  // const len = pieces.length
  // const initialSpeed = totalTypeScreenDuration / len
  // pieces.forEach((piece: any, i: number) => {
  //   piece.style.opacity = "0"
  //   piece.style.transition = `opacity 1s ease-in-out`
  //   setTimeout(() => {
  //     piece.style.opacity = "1.0"
  //   }, initialSpeed * i)
  // })

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
  // }, [isVisible])

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
      {/* <div
        ref={puzzleContainerRef}
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full h-full opacity-30 flex items-center"
      >
        <div className="TestSvg__container w-full h-full flex items-center">
          <TestSvg />
        </div>
        <Puzzle disableAutoFlip />
      </div> */}
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
            Skip
          </span>
          <span
            className={cx(
              "absolute top-0 left-8 lg:left-32 transition duration-1000",
              {
                "opacity-100": isGoingVisible,
                "opacity-0": !isGoingVisible,
              }
            )}
          >
            <SoundFile />
          </span>
        </Block>
      </div>
      {displayFinalAnimation && isVisible ? (
        <div
          className={cx(
            "w-screen h-screen fixed top-0 left-0 bg-black z-50 flex items-center transition-all duration-700",
            {
              "opacity-0": !animationIsVisible,
              "opacity-100": animationIsVisible,
            }
          )}
        >
          <CubeAnimation />
        </div>
      ) : null}
    </div>
  )
}

export default TypeScreen
