import React from "react"
import { useInView } from "react-hook-inview"
import cx from "classnames"

interface Props {
  className?: string
  label: string
  image: {
    placeholder?: string
    src: string
    width: number
    height: number
  }
  progress?: number
}

function Card(props: Props) {
  const [ref, inView] = useInView()

  const imageSrc = inView
    ? props.image?.src
    : props.image?.placeholder || props.image?.src

  return (
    <div ref={ref} className={cx("Card", props.className)}>
      <a href="#">
        <div className="Card__inner">
          <div className="Card__image overflow-hidden">
            <img
              className="transition-all duration-500 transform lg:hover:scale-110"
              src={imageSrc}
              loading="lazy"
              width={props.image.width}
              height={props.image.height}
            />
          </div>
          <div className="Card__text font-semibold text-sm mt-3">
            <span>{props.label}</span>
          </div>
          <div className="Card__progress relative h-4 mt-3 rounded overflow-hidden border border-gray-700 bg-white bg-opacity-10">
            <div
              className="Card__progress-inner bg-white h-3 absolute top-0 left-0 transition-all duration-1000"
              style={
                inView && props.progress
                  ? { width: `${props.progress}%` }
                  : { width: "0%" }
              }
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Card
