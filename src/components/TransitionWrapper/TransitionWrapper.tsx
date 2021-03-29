import React, { useEffect, useState } from "react"

export enum TransitionState {
  OUT,
  IN,
}

export interface Props {
  duration?: number
  isVisibleOnLoad?: boolean
  children(args: any): JSX.Element
}

function TransitionWrapper({
  duration = 1000,
  isVisibleOnLoad = false,
  ...props
}: Props) {
  const [isVisible, setIsVisible] = useState(isVisibleOnLoad)
  const [transitionState, setTransitionState] = useState<TransitionState>(
    TransitionState.OUT
  )

  useEffect(() => {
    let timeout: any

    if (isVisibleOnLoad) {
      setIsVisible(true)
      timeout = setTimeout(() => {
        setTransitionState(TransitionState.IN)
      }, 10)
    } else {
      setTransitionState(TransitionState.OUT)
      timeout = setTimeout(() => {
        setIsVisible(false)
      }, duration)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isVisibleOnLoad, duration])

  return props.children({
    isVisible,
    transitionState,
  })
}

export default TransitionWrapper
