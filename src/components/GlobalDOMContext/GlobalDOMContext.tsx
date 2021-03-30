import React, { useContext, useReducer } from "react"
import GlobalDOMContext, {
  DOMContextStore,
  DOMElement,
  DOMContextRecord,
} from "../../context/global-dom-context"

function reducer(
  store: DOMContextStore,
  action: {
    type: string
    context?: string
    content?: DOMElement
    options?: any
  }
) {
  switch (action.type) {
    case "update":
      return action.context
        ? {
            ...store,
            [action.context]: {
              content: action.content,
              options: action.options,
            },
          }
        : store
    default:
      throw new Error()
  }
}

export function GlobalDOMContextProvider(props: any) {
  const [store, dispatch] = useReducer(reducer, props.initialStore || {})

  return (
    <GlobalDOMContext.Provider
      value={{
        store,
        updateStore: (record: DOMContextRecord) => {
          if (!record.context) {
            return
          }
          dispatch({
            type: "update",
            content: record.content,
            context: record.context,
            options: record.options,
          })
        },
        renderer: (content: DOMElement) =>
          typeof content === "function" ? content() : content,
      }}
    >
      {props.children}
    </GlobalDOMContext.Provider>
  )
}

export function GlobalDOMContextConsumer(props: {
  context: string
  children: (props?: DOMElement) => JSX.Element
}) {
  const { store } = useContext(GlobalDOMContext)

  if (!store) {
    return props.children()
  }

  return props.children(store[props.context])
}
