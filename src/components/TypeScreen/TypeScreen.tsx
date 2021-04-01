import React, { useEffect, useRef, useState } from "react"
import cx from "classnames"
import { Block, Spacer } from "../Layout"
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
  const [isGoingVisible, setIsGoingVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDisplayUI, setIsDisplayUI] = useState(false)
  const [displayFinalAnimation, setDisplayFinalAnimation] = useState(false)
  const [animationIsVisible, setAnimationIsVisible] = useState(false)

  async function onClose() {
    sessionStorage?.setItem("fond-skip-intro", "true")
    setDisplayFinalAnimation(true)
    await wait(200)
    setAnimationIsVisible(true)
    await wait(4000)
    setIsDisplayUI(false)
    setAnimationIsVisible(false)
    await wait(1000)
    setIsGoingVisible(false)
    await wait(700)
    setIsVisible(false)
    props.onClose()
  }

  async function animateIn() {
    setIsVisible(true)

    await wait(700)
    setIsGoingVisible(true)

    await wait(100)
    setIsDisplayUI(true)
  }

  useEffect(() => {
    const hasDismissed =
      typeof window !== "undefined"
        ? sessionStorage?.getItem("fond-skip-intro")
        : false

    if (
      typeof window === "undefined" ||
      hasDismissed ||
      !props.isVisibleOnLoad
    ) {
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

  if (!isVisible || typeof window === "undefined") {
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
        className={cx("relative container mx-auto h-full flex items-center")}
      >
        <Block
          padding="narrow"
          className={cx("lg:ml-8 lg:mr-8 transition duration-800", {
            "opacity-0": !isDisplayUI,
            "opacity-100": isDisplayUI,
          })}
        >
          <p
            ref={textRef}
            className="font-light text-2xl md:text-4xl leading-snug tracking-wide transition opacity-0 duration-1000"
          />
          <Spacer />
          {isDisplayUI ? (
            <>
              <span
                onClick={() => onClose()}
                className="absolute bottom-0 right-8 lg:right-32 font-light text-xl md:text-3xl tracking-wide cursor-pointer"
              >
                Skip
              </span>
              <div
                className={cx(
                  "absolute top-0 left-8 lg:left-32 duration-1000 transition",
                  {
                    "opacity-0": !isGoingVisible,
                    "opacity-100": isGoingVisible,
                  }
                )}
              >
                <SoundFile />
              </div>
            </>
          ) : (
            <></>
          )}
        </Block>
      </div>
      {displayFinalAnimation && isVisible ? (
        <div className="w-screen h-screen fixed top-0 left-0 bg-transparent z-50 flex items-center">
          <div
            className={cx(
              "w-screen h-screen bg-black transition-all duration-700",
              {
                "opacity-0": !animationIsVisible,
                "opacity-100": animationIsVisible,
              }
            )}
          >
            <CubeAnimation />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default TypeScreen
