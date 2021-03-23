import React, { useRef } from "react"
import { useAutoFlip } from "../../hooks/useAutoFlip"
import PuzzlePiece from "../PuzzlePiece"

interface Props {
  triggerAutoFlip?: any
}

function Puzzle(props: Props) {
  const puzzleRef = useRef<HTMLDivElement>(null)
  const arr = Array.from(Array(42)).map((_, i) => i)

  useAutoFlip(
    {
      ref: puzzleRef,
      pieceDelay: 50,
      randomise: true,
    },
    [props.triggerAutoFlip]
  )

  return (
    <div ref={puzzleRef} className="Puzzle w-full flex flex-wrap">
      {arr.map(a => (
        <PuzzlePiece key={a} id={a + 2} />
      ))}
    </div>
  )
}

export default Puzzle
