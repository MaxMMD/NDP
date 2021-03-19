import React, { useEffect, useRef, useState } from "react"
import cx from "classnames"
import Conditional from "./Conditional"
import Icon from "./Icon"

export interface Props {
  images: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >[]
  slideDelay?: number
}

function MultiImage({ slideDelay = 7000, images, ...props }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userHasInteracted, setUserHasInteracted] = useState(false)
  const container = useRef<HTMLDivElement>(null)

  function scrollToIndex(i: number) {
    if (!container?.current) {
      return
    }

    container.current.scrollLeft = container.current.clientWidth * i
  }

  function handleScroll() {
    if (!container?.current) {
      return
    }

    const i = container.current.scrollLeft / container.current.clientWidth
    setCurrentIndex(i)
  }

  useEffect(() => {
    const isSingleImage = images.length <= 1

    if (!container?.current || isSingleImage) {
      return
    }

    container.current.addEventListener("scroll", handleScroll)

    return () => {
      container.current?.removeEventListener("scroll", handleScroll)
    }
  }, [images])

  useEffect(() => {
    const isSingleImage = images.length <= 1

    if (isSingleImage || userHasInteracted) {
      return
    }

    function transitionToNextImage() {
      const nextIndex = currentIndex + 1

      if (nextIndex >= images.length) {
        scrollToIndex(0)
        return
      }

      scrollToIndex(nextIndex)
    }

    const timeout = setTimeout(transitionToNextImage, slideDelay)

    return () => {
      clearTimeout(timeout)
    }
  }, [currentIndex, slideDelay, userHasInteracted])

  return (
    <div className="MultiImage">
      <div ref={container} className="MultiImage__container flex scroll-snap">
        {images.map((img, i) => (
          <a
            key={i}
            href={img.src}
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              "block w-full h-full flex-shrink-0 overflow-hidden transition duration-700 snap-aligncenter group relative",
              {
                "opacity-100": currentIndex === i,
                "opacity-10": currentIndex !== i,
              }
            )}
          >
            <img className={cx("object-contain")} loading="lazy" {...img} />
            <span className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 transition-opacity duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <Icon.ExternalLink width={100} className="text-gray-600" />
            </span>
          </a>
        ))}
      </div>
      <Conditional
        if={images.length > 1}
        render={() => (
          <ol className="flex justify-center mb-2">
            {images.map((_, i) => (
              <li
                key={i}
                onClick={() => {
                  setUserHasInteracted(true)
                  scrollToIndex(i)
                }}
                className={cx(
                  "w-2 h-2 mx-2 rounded-full border overflow-hidden transition duration-200 cursor-pointer",
                  {
                    "bg-gray-200 border-gray-300": i !== currentIndex,
                    "bg-logo-400 border-logo-600": i === currentIndex,
                  }
                )}
              >
                <span className="invisible">{i}</span>
              </li>
            ))}
          </ol>
        )}
      />
    </div>
  )
}

export default MultiImage
