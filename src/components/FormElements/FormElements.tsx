import React from "react"
import cx from "classnames"
import checkboxStyles from "./FormElements.module.css"
import Link from "../Link"

export function TextField({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className={cx(
        "border border-gray-300 lg:hover:border-gray-400 rounded py-3 px-2 w-full",
        className
      )}
      {...props}
    />
  )
}

function getButtonStyles(buttonStyle?: string, className?: string) {
  return cx(
    "inline-block rounded-full transition duration-700 px-8 text-2xl font-normal border cursor-pointer",
    {
      "bg-black hover:bg-white text-white hover:text-black": true,
      "py-4": buttonStyle === "default",
      "py-2": buttonStyle === "squished",
    },
    className
  )
}

export function Button({
  className,
  buttonStyle = "default",
  children,
  ...props
}: { buttonStyle?: string } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button className={getButtonStyles(buttonStyle, className)} {...props}>
      {children}
    </button>
  )
}

export function PseudoButton({
  buttonStyle = "default",
  className,
  children,
  ...props
}: { buttonStyle?: string } & React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  return (
    <Link className={getButtonStyles(buttonStyle, className)} {...props}>
      {children}
    </Link>
  )
}

export function Checkbox({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <label className={cx(checkboxStyles.Checkbox, "Checkbox", className)}>
      {children} <input type="checkbox" {...props} />{" "}
      <span
        className={cx(
          checkboxStyles.Checkbox__checkmark,
          "Checkbox__checkmark"
        )}
      ></span>
    </label>
  )
}
