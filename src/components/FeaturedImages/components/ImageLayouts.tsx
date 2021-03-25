import { chunk } from "lodash"
import cx from "classnames"
import React from "react"
import Image from "../../Image"
import { ImageType } from "../../../types"

export interface Props {
  images: ImageType[]
}

function NoImage(props: Props) {
  return <div></div>
}

function OneImage(props: Props) {
  return (
    <div className="w-full md:flex">
      {props.images.map((img, i) => (
        <div
          key={`image-${i}`}
          className="overflow-hidden w-full h-full border border-white border-opacity-40"
        >
          <Image
            containerClassName="h-full"
            className="w-full h-full object-cover"
            {...img}
          />
        </div>
      ))}
    </div>
  )
}

function TwoImages(props: Props) {
  return (
    <div className="w-full flex">
      {props.images.map((img, i) => (
        <div
          key={`image-${i}`}
          className={cx(
            "overflow-hidden w-1/2 h-full border border-white border-opacity-40",
            {
              "mr-1 md:mr-2": i === 0,
              "ml-1 md:ml-2": i === 1,
            }
          )}
        >
          <Image
            containerClassName="h-full"
            className="w-full h-full object-cover"
            {...img}
          />
        </div>
      ))}
    </div>
  )
}

function ThreeImages(props: Props) {
  const groups = chunk(props.images, 2)

  return (
    <div className="w-full flex">
      {groups.map((group, i) => (
        <div
          key={i}
          className={cx({
            "w-1/3 flex flex-col pr-2 md:pr-4": i === 0,
            "w-2/3": i === 1,
          })}
        >
          {group.map((img, n) => (
            <div
              key={`image-${i}-${n}`}
              className={cx(
                "overflow-hidden w-full h-full border border-white border-opacity-40",
                {
                  "mb-1 md:mb-2": i === 0 && n === 0,
                  "mt-1 md:mt-2 mb-0": i === 0 && n === 1,
                }
              )}
            >
              <Image
                containerClassName="h-full"
                className="w-full h-full object-cover"
                {...img}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function FourImages(props: Props) {
  const groups = chunk(props.images.slice(0, 4), 2)

  return (
    <div className="w-full flex">
      {groups.map((group, i) => (
        <div
          key={i}
          className={cx({
            "w-1/2 flex flex-col pr-1 md:pr-2": i === 0,
            "w-1/2 flex flex-col pl-1 md:pl-2": i === 1,
          })}
        >
          {group.map((img, n) => (
            <div
              key={`image-${i}-${n}`}
              className={cx(
                "overflow-hidden w-full h-full border border-white border-opacity-40",
                {
                  "mb-1 md:mb-2": n === 0,
                  "mt-1 md:mt-2 mb-2 md:mb-0": n === 1,
                }
              )}
            >
              <Image
                containerClassName="h-full"
                className="w-full h-full object-cover"
                {...img}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default [NoImage, OneImage, TwoImages, ThreeImages, FourImages]
