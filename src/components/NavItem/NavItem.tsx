import React from "react"
import Link from "../Link"
import cx from "classnames"

interface Props {
  onClick?: () => void
  highlight?: boolean
  href: string
  label: string
  className?: string
  isHidden?: boolean
  hideBorder?: boolean
}

function NavItem(props: Props) {
  return (
    <li
      className={cx(
        "block mt-2 text-2xl font-light text-white transform transition-all duration-800",
        {
          "font-semibold": props.highlight,
          "opacity-0 -translate-y-32": props.isHidden,
        },
        props.className
      )}
    >
      <Link onClick={props.onClick} href={props.href}>
        {props.label}
      </Link>
      <div
        className={cx(
          "NavItem__border w-full mt-4 h-3 overflow-hidden border-l border-white border-opacity-40 transform transition-all duration-400",
          {
            "opacity-0": props.hideBorder,
          }
        )}
      />
    </li>
  )
}

export default NavItem
