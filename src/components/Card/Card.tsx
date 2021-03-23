import React from "react"
import { useInView } from "react-hook-inview"
import cx from "classnames"
import Link from "../Link"
import ProgressBar from "../ProgressBar"
import Image from "../Image"

export interface CardProps {
  label: string
  image: {
    placeholder?: string
    src: string
    width: number
    height: number
  }
  progress?: number
}

export interface Props extends CardProps {
  className?: string
}

function Card(props: Props) {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className={cx("Card", props.className)}>
      <Link href="/gallery/item-1">
        <div className="Card__inner">
          <div className="Card__image overflow-hidden">
            <Image
              containerClassName="aspect-ratio aspect-ratio-4:5"
              className="transition-all duration-500 transform lg:hover:scale-110"
              src={props.image.src}
              loading="lazy"
              width={props.image.width}
              height={props.image.height}
              isVisible={inView}
            />
          </div>
          <div className="Card__text font-semibold text-sm mt-3">
            <span>{props.label}</span>
          </div>
          <ProgressBar
            className="mt-3"
            width={inView && props.progress ? props.progress : 0}
          />
        </div>
      </Link>
    </div>
  )
}

export default Card
