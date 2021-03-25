import React, { useContext, useEffect, useState } from "react"
import cx from "classnames"
import GlobalDOMContext from "../../context/global-dom-context"
import Icon from "../Icon"

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
            "Modal__inner p-6 bg-black transition-all transform duration-600 relative",
            {
              "translate-y-full opacity-0 delay-0": !isVisible,
              "translate-y-0 opacity-100 delay-500": isVisible,
            }
          )}
        >
          <>{renderer(content)}</>
          <span
            className="absolute -top-12 -right-12 text-lg cursor-pointer"
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
