type NodeOrFn = React.ReactNode | (() => React.ReactNode)

export interface Props {
  if?: boolean
  render?: NodeOrFn
  else?: NodeOrFn
  children?: React.ReactNode
}

const callOrReturn = (fn: NodeOrFn) => {
  try {
    return typeof fn === "function" ? fn() : fn
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err)
    return null
  }
}

const Conditional = (props: Props) =>
  props.if
    ? props.render
      ? callOrReturn(props.render)
      : props.children
    : props.else
    ? callOrReturn(props.else)
    : null

export default Conditional
