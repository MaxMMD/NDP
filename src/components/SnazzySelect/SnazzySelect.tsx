import React from "react"
import cx from "classnames"
import { CustomSelect, Option } from "../FormElements"

interface Props {
  label: string
  options: Option[]
  onSelect: (opt: Option) => void
}

function SnazzySelect(props: Props) {
  return (
    <CustomSelect
      label={props.label}
      getClassNames={isActive => ({
        CustomSelect: "bg-black relative w-full cursor-pointer",
        Label: cx(
          "block border-t border-b border-white px-0 py-2 text-xl flex justify-between items-center",
          {
            "font-light": !isActive,
            "font-normal": isActive,
          }
        ),
        Icon: cx("transform transition-transform duration-300", {
          "rotate-180": isActive,
          "rotate-360": !isActive,
        }),
        Options: cx(
          "bg-black w-full absolute py-2 transform transition-opacity duration-200 z-20 border-b border-white",
          {
            "block opacity-100": isActive,
            "hidden opacity-0": !isActive,
          }
        ),
        Option: cx("block text-xl font-light py-2"),
      })}
      options={props.options}
      onSelect={props.onSelect}
    />
  )
}

export default SnazzySelect
