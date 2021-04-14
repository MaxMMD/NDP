import React from "react"
import cx from "classnames"

interface VariableTag {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

export function Title(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > &
    VariableTag
) {
  const Tag = props.tag || "h1"
  return (
    <Tag className={cx("text-4xl md:text-5xl font-heading", props.className)}>
      {props.children}
    </Tag>
  )
}

export function Heading(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > &
    VariableTag
) {
  const Tag = props.tag || "h2"
  return (
    <Tag
      className={cx(
        "text-3xl md:text-5xl font-heading font-semibold",
        props.className
      )}
    >
      {props.children}
    </Tag>
  )
}

export function Subheading(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > &
    VariableTag
) {
  const Tag = props.tag || "h3"
  return (
    <Tag
      className={cx(
        "text-xl md:text-3xl font-light leading-relaxed tracking-wide",
        props.className
      )}
    >
      {props.children}
    </Tag>
  )
}

type ParagraphProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> &
  VariableTag

export function ParagraphBase(props: ParagraphProps) {
  const Tag = props.tag || "p"
  return (
    <Tag
      className={cx(
        "leading-relaxed tracking-wide",
        props.className || "text-md md:text-xl"
      )}
    >
      {props.children}
    </Tag>
  )
}

export const Paragraph: {
  [key: string]: (props: ParagraphProps) => JSX.Element
} = {
  Small: ({ className, ...props }) => (
    <ParagraphBase className={cx("text-sm font-light", className)} {...props} />
  ),
  Medium: ({ className, ...props }) => (
    <ParagraphBase
      className={cx("text-base md:text-md", className)}
      {...props}
    />
  ),
  Base: ({ className, ...props }) => (
    <ParagraphBase
      className={cx("text-md font-light my-6", className)}
      {...props}
    />
  ),
}
