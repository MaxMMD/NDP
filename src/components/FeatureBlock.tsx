import React from "react"
import cx from "classnames"
import { Paragraph, Subheading } from "./Typography"
import Conditional from "./Conditional"
import MultiImage from "./MultiImage"

export interface Props {
  subheading: string
  reverse?: boolean
  borderBottom?: boolean
  borderTop?: boolean
  children?: React.ReactNode
  images?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >[]
  caption?: string
}

function FeatureBlock({
  borderTop = true,
  borderBottom = true,
  ...props
}: Props) {
  return (
    <div
      className={cx(
        "FeatureBlock py-8 md:py-16 flex flex-wrap border-gray-200",
        {
          "flex-row-reverse": !!props.reverse,
          "flex-row": !props.reverse,
          "border-t": !!borderTop,
          "border-b": !!borderBottom,
        }
      )}
    >
      <div
        className={cx("FeatureBlock__content w-full lg:w-1/2", {
          "lg:pl-16": !!props.reverse,
          "lg:pr-16": !props.reverse,
        })}
      >
        <Subheading className="w-3/4">{props.subheading}</Subheading>
        {props.children}
      </div>
      <figure className="FeatureBlock__image w-full lg:w-1/2 overflow-hidden">
        <Conditional
          if={!!props.images}
          render={() => <MultiImage images={props.images!} />}
        />
        <figcaption className="w-full block p-4 md:px-16 text-center">
          <Paragraph.Small className="text-gray-600">
            {props.caption}
          </Paragraph.Small>
        </figcaption>
      </figure>
    </div>
  )
}

export default FeatureBlock
