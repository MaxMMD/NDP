import React from "react"
import "./PuzzlePiece.css"

export interface Props {
  id: number
}

function PuzzlePiece(props: Props) {
  if (!props.id) {
    return null
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
              <div className="flip-card-back absolute w-full h-full bg-blue-600">
                <img
                  className="w-full h-full"
                  src="https://placehold.it/500x500/FF0000/FFFFFF?text=Back"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PuzzlePiece
