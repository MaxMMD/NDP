import React, { useRef } from "react"
import cx from "classnames"
import chunk from "lodash.chunk"
import Card from "../Card"
import { useScrollSnapControls } from "../../hooks/useScrollSnapControls"
import Icon from "../Icon"
import { ArtefactType, Node } from "../../types"

interface Props {
  carousel?: boolean
  cardLinkPath?: string
  items: Node<ArtefactType>[]
}
function CardGrid({ items, cardLinkPath = "/gallery", ...props }: Props) {
  const carousel = useRef(null)
  const chunks = chunk(items, 4)

  const scrollSnapControls = useScrollSnapControls(carousel, {
    slideCount: chunks.length,
    slidesPerScreen: 1,
    sliderSelector: ".CardGrid__inner",
    slideSelector: ".CardGrid__slide",
  })

  return (
    <div className="CardGrid relative my-8">
      <div
        ref={carousel}
        className={cx("CardGrid__inner flex flex-col md:-mx-6 -my-6", {
          "lg:flex-row lg:flex-nowrap  lg:scroll-snap": props.carousel,
        })}
      >
        {chunks.map((a, n) => (
          <div
            className="CardGrid__slide w-full flex flex-wrap justify-start flex-shrink-0 lg:snap-aligncenter"
            key={`card-grid-slide-${n}`}
          >
            {a.map((card, i) => (
              <div
                key={`card-grid-item-${n}-${i}-${card.node.slug}`}
                className="w-1/2 md:w-1/3 lg:w-1/4 px-2 py-6 md:px-6"
              >
                <Card {...card} href={`${cardLinkPath}/${card.node.slug}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
      {props.carousel && chunks.length > 1 ? (
        <div className="CardGrid__controls hidden lg:flex justify-between w-full pt-6">
          <span
            onClick={() =>
              scrollSnapControls.goToSlide(scrollSnapControls.currentSlide - 1)
            }
            className="cursor-pointer"
          >
            <Icon.Chevron width={32} className="transform -rotate-180" />
          </span>
          <span
            onClick={() =>
              scrollSnapControls.goToSlide(scrollSnapControls.currentSlide + 1)
            }
            className="cursor-pointer"
          >
            <Icon.Chevron width={32} />
          </span>
        </div>
      ) : null}
    </div>
  )
}

export default CardGrid
