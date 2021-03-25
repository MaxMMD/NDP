import React from "react"
import { useInView } from "react-hook-inview"
import cx from "classnames"
import Link from "../Link"
import ProgressBar from "../ProgressBar"
import Image from "../Image"
import { ArtefactType, Node } from "../../types"

export interface Props extends Node<ArtefactType> {
  href: string
  className?: string
}

function Card(props: Props) {
  const [ref, inView] = useInView()
  const { node } = props

  const coverImage = node.images?.[0]?.resize

  return (
    <div ref={ref} className={cx("Card", props.className)}>
      <Link href={props.href}>
        <div className="Card__inner">
          <div className="Card__image overflow-hidden">
            <Image
              containerClassName="aspect-ratio aspect-ratio-4:5"
              className="transition-all duration-500 transform lg:hover:scale-110"
              loading="lazy"
              isVisible={inView}
              {...coverImage}
            />
          </div>
          <div className="Card__text font-semibold text-sm mt-3">
            <span>{node.title}</span>
          </div>
          <ProgressBar
            className="mt-3"
            width={inView ? node.restorationProgress : 0}
          />
        </div>
      </Link>
    </div>
  )
}

export default Card
