import React, { useEffect, useRef, useState } from "react"
import cx from "classnames"
import { Block, Spacer } from "../Layout"
import CubeAnimation from "../CubeAnimation"
import SoundFile from "../SoundFile"
import { chunk } from "lodash"

export interface Props {
  text: string[]
  isVisibleOnLoad?: boolean
  beforeOnClose?: () => void
  onClose: () => void
}

const TEXT_DELAY = 2000
const TRANSITION_OUT_DELAY = 1000
const TRANSITION_IN_DELAY = 1000

async function wait(ms: number) {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      resolve(timeout)
    }, ms)
  })
}

async function animateTextBlocks(
  textRef: React.RefObject<HTMLDivElement>[],
  text: string[][],
  onClose: () => void
) {
  const [textRef1, textRef2] = textRef

  if (!textRef1.current || !textRef2.current) {
    return
  }
  function showBlock(i = 0) {
    const p1 = textRef1.current
    const p2 = textRef2.current

    if (p1 && p2 && text[i]) {
      showParagraph(i)
    }
  }

  async function showParagraph(blockIndex = 0) {
    const p1 = textRef1.current
    const p2 = textRef2.current

    if (p1 && p2 && text[blockIndex]) {
      const [str1 = "", str2 = ""] = text[blockIndex]
      p1.innerHTML = str1
      p2.innerHTML = str2

      p1.style.opacity = "1.0"

      await wait(TEXT_DELAY)

      p2.style.opacity = "1.0"

      await wait(TEXT_DELAY)
      await wait(TRANSITION_OUT_DELAY)

      p1.style.opacity = "0"

      await wait(TEXT_DELAY)

      p2.style.opacity = "0"

      await wait(TRANSITION_IN_DELAY)

      showBlock(blockIndex + 1)
    }

    if (blockIndex + 1 >= text.length) {
      setTimeout(onClose, 500)
      return
    }
  }

  await wait(2000) // brief pause before showing first paragraph
  showBlock()
}

export const typescreenManager = {
  dismiss: () => sessionStorage?.setItem("fond-skip-intro", "true"),
  isDismissed: () =>
    typeof window !== "undefined"
      ? sessionStorage?.getItem("fond-skip-intro")
      : false,
}

function TypeScreen(props: Props) {
  const textRef1 = useRef<HTMLParagraphElement>(null)
  const textRef2 = useRef<HTMLParagraphElement>(null)
  const [isGoingVisible, setIsGoingVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isDisplayUI, setIsDisplayUI] = useState(false)
  const [displayFinalAnimation, setDisplayFinalAnimation] = useState(false)
  const [animationIsVisible, setAnimationIsVisible] = useState(false)

  async function onClose() {
    typescreenManager.dismiss()

    if (props.beforeOnClose) {
      props.beforeOnClose()
    }

    setDisplayFinalAnimation(true) // render CubeAnimation in dom
    await wait(200)
    setAnimationIsVisible(true) // Fade CubeAnimation in
    await wait(4000)
    setIsDisplayUI(false) // Hide sound controls
    setAnimationIsVisible(false) // Fade CubeAnimation out
    await wait(1000)
    setIsGoingVisible(false) // Fade TypeScreen out
    await wait(700)
    setIsVisible(false) // remove Typescreen from dom
    props.onClose()
  }

  function onLoad() {
    return typescreenManager.isDismissed()
  }

  async function animateIn() {
    setIsVisible(true)

    await wait(700)
    setIsGoingVisible(true)

    await wait(100)
    setIsDisplayUI(true)
  }

  useEffect(() => {
    const hasDismissed = onLoad()

    if (
      typeof window === "undefined" ||
      hasDismissed ||
      !props.isVisibleOnLoad
    ) {
      if (props.beforeOnClose) {
        props.beforeOnClose()
      }
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

    const text = chunk(props.text, 2)

    animateTextBlocks([textRef1, textRef2], text, onClose)
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
            ref={textRef1}
            className="font-light text-xl md:text-4xl leading-snug md:leading-snug tracking-wide transition opacity-0 duration-1000"
          />
          <p
            ref={textRef2}
            className="font-light text-xl md:text-4xl mt-6 md:mt-12 leading-snug md:leading-snug tracking-wide transition opacity-0 duration-1000"
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
                  "absolute -bottom-4 lg:-bottom-2 left-4 md:left-8 lg:left-32 duration-1000 transition",
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
