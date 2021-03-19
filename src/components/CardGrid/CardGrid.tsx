import React, { useRef } from "react"
import chunk from "lodash.chunk"
import Card from "../Card/Card"
import { useScrollSnapControls } from "../../hooks/useScrollSnapControls"
import Icon from "../Icon"

const PLACEHOLDER_IMAGE = "https://placehold.it/500x600/252525"
const LIVE_IMAGE = "https://placehold.it/500x600/323333"

function CardGrid() {
  const carousel = useRef(null)
  const arr = Array.from(Array(25)).map((_, i) => ({
    key: i,
    label: `Card Item #${i + 1}`,
    image: {
      placeholder: PLACEHOLDER_IMAGE,
      src: LIVE_IMAGE,
      width: 500,
      height: 600,
    },
    progress: 33,
  }))
  const chunks = chunk(arr, 4)

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
        className="CardGrid__inner flex flex-col lg:flex-row lg:flex-nowrap lg:-mx-6 -my-6 lg:scroll-snap"
      >
        {chunks.map((a, n) => (
          <div
            className="CardGrid__slide w-full flex flex-wrap justify-center lg:justify-start flex-shrink-0 lg:snap-aligncenter"
            key={`card-grid-slide-${n}`}
          >
            {a.map((card, i) => (
              <div key={`card-grid-item-${n}-${i}`} className="lg:w-1/4 p-6">
                <Card
                  label={card.label}
                  progress={card.progress}
                  image={card.image}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
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
    </div>
  )
}

export default CardGrid
