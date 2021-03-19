import React from "react"

export interface Props {
  items: string[]
}

function FeatureList(props: Props) {
  return (
    <ul className="FeatureList flex justify-start flex-wrap lg:w-4/5">
      {props.items.map((item, i) => (
        <li
          key={i}
          className="inline-flex pb-1 pr-2 md:pr-4 mr-6 mb-6 md:mb-8 text-md md:text-lg font-logotype tracking-wide text-left border-b-4 md:border-b-8 border-logo-100 lg:hover:border-logo-500 transition duration-500 items-center"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default FeatureList
