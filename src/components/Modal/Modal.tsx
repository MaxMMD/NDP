import React, { useContext, useEffect, useState } from "react"
import cx from "classnames"
import GlobalDOMContext from "../../context/global-dom-context"
import Icon from "../Icon"

let scrollPosition = 0

function Modal() {
  const {
    store,
    updateStore = () => null,
    renderer = (c: any) => c,
  } = useContext(GlobalDOMContext)
  const [isVisible, setIsVisible] = useState(false)
  const { content, options = {} } = store?.modal || {}
  const { fullscreen = false } = options
  useEffect(() => {
    if (!!content) {
      setTimeout(() => {
        setIsVisible(true)
      }, 200)
      return
    }
  }, [content])

  useEffect(() => {
    if (!fullscreen) {
      return
    }
    if (isVisible) {
      scrollPosition = window.scrollY
      document.body.classList.add("fixed", "w-full")
    } else {
      document.body.classList.remove("fixed", "w-full")
      document.documentElement.scrollTop = scrollPosition
    }
  }, [isVisible])

  if (content) {
    return (
      <div
        className={cx(
          "Modal fixed top-0 left-0 z-50 w-screen h-screen overflow-hidden bg-black bg-opacity-70 flex justify-center items-center transition duration-1000 px-2 pt-8 md:p-16",
          {
            "opacity-100": isVisible,
            "opacity-0": !isVisible,
          }
        )}
      >
        <div
          className={cx(
            "Modal__inner p-6 bg-black transition-all transform duration-600 relative",
            {
              "translate-y-full opacity-0 delay-0": !isVisible,
              "translate-y-0 opacity-100 delay-500": isVisible,
              "w-full h-full xl:px-32": fullscreen,
            }
          )}
        >
          <div
            className={cx({
              "w-full h-full overflow-y-auto overscroll-contain": fullscreen,
            })}
          >
            {renderer(content)}
          </div>
          <span
            className={cx("absolute text-lg cursor-pointer -top-3 right-4", {
              "md:-top-12 md:-right-12": !fullscreen,
              "xl:right-24": fullscreen,
            })}
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => {
                updateStore({ context: "modal", content: null })
              }, 1000)
            }}
            aria-label="Close"
          >
            <Icon.Close
              width={36}
              className="transform transition-transform duration-700 lg:hover:scale-110"
            />
          </span>
        </div>
      </div>
    )
  }

  return null
}

export default Modal
