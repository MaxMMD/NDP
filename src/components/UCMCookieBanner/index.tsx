/**
 * This component can only be loaded client-side
 */
import { useEffect } from "react"
// @ts-ignore
// import ucm from "ucm"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import cookieLabels, { UCMLabels } from "./locale/labels"

import "./styles.css"

export interface UCMCookie {
  required: boolean
  selected: boolean
  name?: string
}

export interface Props {
  locale?: string
  settings?: {
    validateOnClose?: boolean
    pushTop?: boolean
    pushPop?: boolean
    fixBottom?: boolean
    disableAcceptAll?: boolean
    pushTopHideOnScroll?: boolean
    mobileOffCanvas?: boolean
    switchOrder?: boolean
    moreLink?: string
    domain?: string
    timeout?: number
    daysBeforeExpiry?: number
    debugMode?: boolean
  }
  cookies?: {
    functional?: UCMCookie
    analytics?: UCMCookie
    advertising?: UCMCookie
  }
  labels?: UCMLabels
}

const DEFAULT_COOKIES = {
  functional: {
    required: true,
    selected: true,
    name: "functional",
  },
  analytics: {
    required: false,
    selected: true,
    name: "analytics",
  },
}

let isInitialised = false // only initialise once

function CookieBanner({
  locale,
  settings = {},
  labels = {},
  cookies = DEFAULT_COOKIES,
}: Props): null {
  const ucm = typeof window !== `undefined` ? require("ucm") : null

  const location = useLocation()
  const localeLabels = cookieLabels(locale)

  useEffect(() => {
    if (!ucm || !window || isInitialised) {
      return
    }

    try {
      isInitialised = true

      ucm.initialize({
        settings: {
          validateOnClose: false,
          pushTop: false,
          pushPop: true,
          fixBottom: false,
          disableAcceptAll: false,
          disableRejectAll: true,
          pushTopHideOnScroll: false,
          mobileOffCanvas: true,
          switchOrder: false,
          moreLink: "",
          domain: null,
          timeout: 0,
          daysBeforeExpiry: 396,
          ...settings,
        },
        cookies,
        strings: { ...localeLabels, ...labels },
        onStatus: (status: string, data: any) => {
          if (status === "ucm_load") {
            //Send event to gtm
            if (data?.analytics) {
              initializeAndTrack(location)
            }
          }
        },
      })

      return () => {
        isInitialised = false

        if (document) {
          const ucmWrapper = document.getElementById("ucm-wrapper")
          ucmWrapper?.parentNode?.removeChild(ucmWrapper)
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }, [])

  return null
}

export default CookieBanner
