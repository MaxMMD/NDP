import React, { useEffect, useState } from "react"
import debounce from "lodash.debounce"

function getSlider(ref: HTMLDivElement, sliderSelector: string) {
  const sliderContainer = ref.parentElement
  return sliderContainer?.querySelector(sliderSelector)
}

function getSlides(slider: Element, slideSelector: string) {
  return slider.querySelectorAll(slideSelector)
}

function isMobile(window?: any) {
  if (typeof window !== "undefined") {
    return window.innerWidth < 640
  }
  return 0
}

function rounderGenerator(slideCount: number, slidesPerScreen: number) {
  return (f: number) => {
    const fn = slideCount % slidesPerScreen === 0 ? Math.floor : Math.ceil
    const i = fn(f)
    return i
  }
}

function getLastSlideInView(slider: any, slideWidth: any) {
  return (slider.scrollLeft + slider.clientWidth - slideWidth / 2) / slideWidth
}

function getNextSlideIndex(currentIndex: number, maxIndex: number) {
  let nextSlideIndex = currentIndex

  if (currentIndex < 0) {
    nextSlideIndex = maxIndex - 1
  } else if (currentIndex >= maxIndex) {
    nextSlideIndex = 0
  }

  return nextSlideIndex
}

function getNextSlide(
  slides: NodeListOf<Element>,
  nextSlideIndex: number,
  slidesPerScreen: number
) {
  let nextSlide = slides[0] as HTMLElement

  if (isMobile(window)) {
    nextSlide = slides[nextSlideIndex] as HTMLElement
  } else {
    nextSlide = slides[
      Math.floor(nextSlideIndex * slidesPerScreen)
    ] as HTMLElement
  }

  return nextSlide
}

export function useScrollSnapControls(
  ref: React.RefObject<HTMLDivElement>,
  options: {
    slideCount: number
    slidesPerScreen: number
    sliderSelector: string
    slideSelector: string
  }
) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dotsCount, setDotsCount] = useState(0)

  const roundForSlideIndex = rounderGenerator(
    options.slideCount,
    options.slidesPerScreen
  )

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") {
      return
    }

    const slider = getSlider(ref.current, options.sliderSelector)

    if (!slider) {
      return
    }

    const handleResize = debounce(() => {
      if (slider && !isMobile(window)) {
        const slides = getSlides(slider, options.slideSelector)
        if (slides && slides.length) {
          const screens = roundForSlideIndex(
            slides.length / options.slidesPerScreen
          )
          setDotsCount(screens)
        }
      } else {
        setDotsCount(options.slideCount)
      }
    }, 200)

    const handleScroll = debounce(() => {
      const slides = getSlides(slider, options.slideSelector)
      if (slides && slides[0]) {
        if (!isMobile(window)) {
          const slideWidth = slides[0].clientWidth
          const slideIndex = Math.floor(
            getLastSlideInView(slider, slideWidth) / options.slidesPerScreen
          )
          setCurrentSlide(slideIndex)
        } else {
          const slideWidth = slides[0].clientWidth
          const slideIndex = Math.ceil(slider.scrollLeft / slideWidth) // assumes all slides same width
          setCurrentSlide(slideIndex)
        }
      }
    }, 200)

    slider.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      slider.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [options.slideCount, options.slidesPerScreen])

  const goToSlide = (i: number) => {
    if (!ref.current || typeof window === "undefined") {
      return
    }

    const count = isMobile(window) ? options.slideCount : dotsCount
    const nextSlideIndex = getNextSlideIndex(i, count)
    const slider = getSlider(ref.current, options.sliderSelector)

    if (!slider) {
      return
    }

    const slides = getSlides(slider, options.slideSelector)
    const nextSlide = getNextSlide(
      slides,
      nextSlideIndex,
      options.slidesPerScreen
    )

    if (!nextSlide) {
      return
    }

    const nextLeft = nextSlide.offsetLeft

    slider.scroll({
      top: 0,
      left: nextLeft,
      behavior: "smooth",
    })
  }

  return {
    goToSlide,
    currentSlide,
    dotsCount,
  }
}
