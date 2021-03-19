import React from "react"
import PuzzlePiece from "../PuzzlePiece"

function Puzzle() {
  const arr = Array.from(Array(42)).map((_, i) => i)
  return (
    <div className="Puzzle w-full flex flex-wrap">
      {arr.map(a => (
        <PuzzlePiece key={a} id={a + 2} />
      ))}
    </div>
  )
}

export default Puzzle
