import React from "react"
import cx from "classnames"

export interface BaseLayoutProps {
  className?: string
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[]
}

export function Spacer(props: BaseLayoutProps) {
  return (
    <div
      className={cx(
        "Spacer w-full overflow-hidden",
        props.className || "mt-8 lg:mt-16"
      )}
    />
  )
}

export function Block({
  padding = "default",
  ...props
}: BaseLayoutProps & ChildrenProps & { padding?: string }) {
  return (
    <div
      className={cx(
        "Block",
        {
          "px-8 lg:px-32": padding === "narrow",
          "mx-8 lg:mx-20": padding === "default",
          "px-8 lg:px-0": padding === "none",
        },
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
