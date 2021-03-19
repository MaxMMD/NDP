import React from "react"

type ReturnType<T> = (assertedValue: T) => JSX.Element | JSX.Element[]
type AssertionTypes<T> = T | (() => T) | T[] | Array<() => T> | null | undefined

export interface Props<T> {
  val?: AssertionTypes<T>
  render?: ReturnType<AssertionTypes<T>>
  else?: ReturnType<AssertionTypes<T>>
  children: ReturnType<AssertionTypes<T>>
}

function Assert<T = any>(props: Props<T>) {
  if (!props.val) {
    return null
  }

  if (Array.isArray(props.val) && !props.val.length) {
    return null
  }

  return <>{props.children(props.val)}</>
}

export default Assert
