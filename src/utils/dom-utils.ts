export const slideTo = (top: number) => {
  if (typeof window === "undefined") {
    return
  }
  const supportsNativeSmoothScroll =
    "scrollBehavior" in document.documentElement.style
  if (supportsNativeSmoothScroll) {
    window.scrollTo({ top, behavior: "smooth" })
    return
  }
  const scroll: any = window.scrollTo
  scroll(0, top)
}

export const slideToTop = () => slideTo(0)

export const slideToTargetElement = (target?: string | HTMLElement | null) => {
  const targetElement: HTMLElement | null | undefined =
    typeof target === "string"
      ? (document.querySelector(target) as HTMLElement)
      : target
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
    })
  }
}

export const loadDynamicScript = (
  path: string,
  id: string,
  callback?: (err?: any) => void
) => {
  if (typeof window === "undefined") {
    return
  }

  const existingScript = document.getElementById(id)

  if (!existingScript) {
    const script = document.createElement("script")
    script.src = path // URL for the third-party library being loaded.
    script.id = id // e.g., googleMaps or stripe
    document.body.appendChild(script)

    script.onload = () => {
      if (callback) callback()
    }

    script.onerror = (err: any) => {
      if (callback) callback(err)
    }
  }

  if (existingScript && callback) callback()
}
