import React from "react"
import { ArtefactNode } from "../../types"
import "./PuzzlePiece.css"

export interface Props {
  id: number
  flipped?: boolean
  card?: ArtefactNode
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
    <div className="w-1/6">
      <div className="aspect-ratio">
        <div className="aspect-ratio-1:1">
          <div className="flip-card absolute top-0 left-0 w-full h-full">
            <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
              <div className="flip-card-front absolute w-full h-full bg-transparent">
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
              <div className="flip-card-back absolute w-full h-full bg-black border border-white border-opacity-60">
                <img className="w-full h-full" {...reverseImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PuzzlePiece
