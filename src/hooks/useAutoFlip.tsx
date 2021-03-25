import { useEffect } from "react"
import shuffle from "lodash.shuffle"

export function useAutoFlip(options: any, triggers: any[] = []) {
  const selector = options.selector || ".flip-card"
  const modifier = options.modifier || "flip-card--flipped"
  const pieceDelay = options.pieceDelay || 20
  const loopDelay = options.loopDelay || 500
  const randomise = options.randomise || false

  useEffect(() => {
    if (!options.ref.current || options.disabled) {
      return
    }

    const parent = options.ref.current! as HTMLDivElement
    let children = [...(parent.querySelectorAll(selector) as any)]

    if (randomise) {
      children = shuffle(children)
    }

    function flipPiece(n = 0, loop = 0, maxLoops = 1) {
      if (children[n]) {
        const child = children[n]

        if (child.classList.contains(modifier)) {
          child.classList.remove(modifier)
        } else {
          child.classList.add(modifier)
        }

        setTimeout(() => {
          flipPiece(n + 1, loop, maxLoops)
        }, pieceDelay)

        return
      }

      if (loop + 1 <= maxLoops) {
        setTimeout(() => {
          flipPiece(0, loop + 1, maxLoops)
        }, loopDelay)
      }
    }

    console.log("trigger autoflip")

    flipPiece(0)
  }, triggers)
}
