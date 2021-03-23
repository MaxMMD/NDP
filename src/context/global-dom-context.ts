import React, { useContext, useReducer } from "react"

export type DOMElement =
  | HTMLElement
  | JSX.Element
  | React.ReactNode
  | string
  | null
  | undefined

export interface DOMContextRecord {
  context?: string
  content?: DOMElement
}

export interface DOMContextStore {
  [key: string]: DOMElement
}

const GlobalDOMContext = React.createContext<{
  store?: DOMContextStore
  updateStore?: (record: DOMContextRecord) => void
  renderer?: (content: DOMElement) => JSX.Element
}>({})

export default GlobalDOMContext
