import React from "react"
import cx from "classnames"
import { ArtefactType, Node } from "../../types"
import "./PuzzlePiece.css"

export interface Props {
  id: number
  flipped?: boolean
  card?: Node<ArtefactType>
  disableFlip?: boolean
}

function PuzzlePiece(props: Props) {
  if (!props.id) {
    return null
  }

  const reverseImage = props.card?.node?.images?.[0]?.resize || {
    src: "https://placehold.it/150x150/303030/FFFFFF?text=Back",
    width: 150,
    height: 150,
  }

  return (
    <div className="PuzzlePiece w-1/6">
      <div className="aspect-ratio">
        <div className="aspect-ratio-1:1">
          <div
            className={cx("absolute top-0 left-0 w-full h-full", {
              "flip-card": !props.disableFlip,
            })}
          >
            <div
              className={cx("relative w-full h-full", {
                "flip-card-inner transition-transform duration-700": !props.disableFlip,
              })}
            >
              <div
                className={cx("absolute w-full h-full bg-transparent", {
                  "flip-card-front": !props.disableFlip,
                })}
              >
                <img
                  className="w-full h-full"
                  src={`/images/puzzle-pieces/Notre_Dame_R3-${props.id.toLocaleString(
                    "en-US",
                    {
                      minimumIntegerDigits: 2,
                      useGrouping: false,
                    }
                  )}.svg`}
                  alt="Avatar"
                />
              </div>
              {!props.disableFlip ? (
                <div className="flip-card-back absolute w-full h-full bg-black border border-white border-opacity-60">
                  <img className="w-full h-full" {...reverseImage} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PuzzlePiece
