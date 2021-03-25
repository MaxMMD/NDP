import { useStaticQuery, graphql } from "gatsby"
import React, { useRef } from "react"
import { useAutoFlip } from "../../hooks/useAutoFlip"
import { GalleryPagePropsData } from "../../types"
import PuzzlePiece from "../PuzzlePiece"

interface Props {
  triggerAutoFlip?: number
}

function Puzzle(props: Props) {
  const data: GalleryPagePropsData = useStaticQuery(graphql`
    query {
      allContentfulFriendsOfNotreDameArtefact(
        filter: { featured: { eq: true }, node_locale: { in: "en-US" } }
      ) {
        edges {
          node {
            slug
            id
            restorationProgress
            featured
            images {
              resize(height: 150, width: 150) {
                height
                width
                src
              }
            }
          }
        }
      }
    }
  `)

  const puzzleRef = useRef<HTMLDivElement>(null)
  const cards = data.allContentfulFriendsOfNotreDameArtefact.edges || []
  const arr = Array.from(Array(42)).map((_, i) => i)

  useAutoFlip(
    {
      ref: puzzleRef,
      pieceDelay: 50,
      randomise: false,
    },
    [props.triggerAutoFlip]
  )

  return (
    <div ref={puzzleRef} className="Puzzle w-full flex flex-wrap">
      {arr.map((a, i) => (
        <PuzzlePiece key={a} id={a + 2} card={cards?.[i]} />
      ))}
    </div>
  )
}

export default Puzzle
