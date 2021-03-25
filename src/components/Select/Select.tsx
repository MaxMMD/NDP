import React from "react"
import "./Select.css"

export interface Props {
  options: Array<{
    value: string
    label: string
  }>
  onChange: (e: any) => void
}

function Select(props: Props) {
  return (
    <select
      onChange={props.onChange}
      className="Select appearance-none bg-black border-t border-b border-white px-0 py-2 w-full text-xl font-light"
    >
      {props.options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}

export default Select
