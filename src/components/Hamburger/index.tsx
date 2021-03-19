// Based on this library: https://jonsuh.com/hamburgers/
import React, { useState, useEffect } from "react"
import cx from "classnames"

import "./styles.css"

export type HamburgerAnimationStyle =
  | "3dx"
  | "3dx-r"
  | "3dxy"
  | "3dxy-r"
  | "3dy"
  | "3dy-r"
  | "arrow"
  | "arrowalt"
  | "arrowalt-r"
  | "arrow-r"
  | "arrowturn"
  | "arrowturn-r"
  | "boring"
  | "collapse"
  | "collapse-r"
  | "elastic"
  | "elastic-r"
  | "emphatic"
  | "emphatic-r"
  | "minus"
  | "slider"
  | "slider-r"
  | "spin"
  | "spin-r"
  | "spring"
  | "spring-r"
  | "stand"
  | "stand-r"
  | "squeeze"
  | "vortex"
  | "vortex-r"

interface Props extends React.AriaAttributes {
  id?: string
  isActiveOnLoad?: boolean
  className?: string
  animationStyle?: HamburgerAnimationStyle
  color?: string
  onToggle?: (
    isActive: boolean,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    callback: (isActive?: boolean) => void
  ) => void
}

function Hamburger({
  id,
  animationStyle = "slider",
  isActiveOnLoad = false,
  onToggle = (_isActive, _e, callback) => callback(),
  color = "black",
  className,
  ...ariaAttributes
}: Props) {
  const [isActive, setIsActive] = useState(isActiveOnLoad)

  useEffect(() => {
    setIsActive(isActiveOnLoad)
  }, [isActiveOnLoad])

  return (
    <button
      {...ariaAttributes}
      id={id}
      className={cx(
        "hamburger",
        `hamburger--${animationStyle}`,
        `hamburger--${color}`,
        {
          "is-active": isActive,
        },
        className
      )}
      type="button"
      onClick={e => {
        onToggle(!isActive, e, () => {
          setIsActive(!isActive)
        })
      }}
    >
      <span className="hamburger-box">
        <span
          className={cx("hamburger-inner", {
            "bg-black": color === "black",
            "bg-white": color === "white",
          })}
        ></span>
      </span>
    </button>
  )
}

export default Hamburger
