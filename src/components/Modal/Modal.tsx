import React, { useContext, useEffect, useState } from "react"
import cx from "classnames"
import GlobalDOMContext from "../../context/global-dom-context"

function Modal() {
  const {
    store,
    updateStore = () => null,
    renderer = (c: any) => c,
  } = useContext(GlobalDOMContext)
  const [isVisible, setIsVisible] = useState(false)
  const content = store?.modal

  useEffect(() => {
    if (!!content) {
      setTimeout(() => {
        setIsVisible(true)
      }, 200)
      return
    }
  }, [content])

  if (content) {
    return (
      <div
        className={cx(
          "Modal fixed top-0 left-0 z-50 w-screen h-screen overflow-hidden bg-black bg-opacity-70 flex justify-center items-center transition duration-1000",
          {
            "opacity-100": isVisible,
            "opacity-0": !isVisible,
          }
        )}
      >
        <div
          className={cx(
            "Modal__inner p-6 bg-black transition-all transform duration-600",
            {
              "translate-y-full opacity-0 delay-0": !isVisible,
              "translate-y-0 opacity-100 delay-500": isVisible,
            }
          )}
        >
          {renderer(content)}
        </div>
        <span
          className="absolute top-0 right-0 text-lg py-6 px-16 cursor-pointer"
          onClick={() => {
            setIsVisible(false)
            setTimeout(() => {
              updateStore({ context: "modal", content: null })
            }, 1000)
          }}
        >
          Close
        </span>
      </div>
    )
  }

  return null
}

export default Modal
