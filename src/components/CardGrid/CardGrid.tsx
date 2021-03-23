import React, { useRef } from "react"
import cx from "classnames"
import chunk from "lodash.chunk"
import Card, { CardProps } from "../Card/Card"
import { useScrollSnapControls } from "../../hooks/useScrollSnapControls"
import Icon from "../Icon"

interface Props {
  carousel?: boolean
  items: CardProps[]
}
function CardGrid(props: Props) {
  const carousel = useRef(null)
  const chunks = chunk(props.items || [], 4)

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
                key={`card-grid-item-${n}-${i}`}
                className="w-full md:w-1/2 lg:w-1/4 py-6 md:px-6"
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        ))}
      </div>
      {chunks.length > 1 ? (
        <div className="CardGrid__controls hidden lg:block">
          <span
            onClick={() =>
              scrollSnapControls.goToSlide(scrollSnapControls.currentSlide + 1)
            }
            className="absolute top-1/2 -right-12 text-3xl transform -translate-y-1/2"
          >
            <Icon.Chevron />
          </span>
          <span
            onClick={() =>
              scrollSnapControls.goToSlide(scrollSnapControls.currentSlide - 1)
            }
            className="absolute top-1/2 -left-12 text-3xl transform -translate-y-1/2"
          >
            <Icon.Chevron className="transform -rotate-180" />
          </span>
        </div>
      ) : null}
    </div>
  )
}

export default CardGrid
