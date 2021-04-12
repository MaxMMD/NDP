import { useStaticQuery, graphql } from "gatsby"
import cx from "classnames"
import React, { useRef } from "react"
import { useAutoFlip } from "../../hooks/useAutoFlip"
import { GalleryPagePropsData } from "../../types"
import PuzzlePiece from "../PuzzlePiece"

interface Props {
  triggerAutoFlip?: number | null
  disableAutoFlip?: boolean
}

function Puzzle(props: Props) {
  const data: GalleryPagePropsData = useStaticQuery(graphql`
    query {
      allContentfulFriendsOfNotreDameArtefact(
        limit: 42
        filter: { featured: { eq: true }, node_locale: { in: "en-US" } }
      ) {
        edges {
          node {
            slug
            id
            restorationComplete
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
      disabled: !!props.disableAutoFlip,
    },
    [props.triggerAutoFlip]
  )

  return (
    <div
      ref={puzzleRef}
      className={cx("Puzzle w-full flex flex-wrap", {
        // "pt-2 pl-2": useJigsawPuzzle
      })}
    >
      {arr.map((a, i) => (
        <PuzzlePiece
          key={a}
          index={a}
          card={cards?.[i]}
          disableFlip={props.disableAutoFlip}
          // className="-mt-2 -ml-2"
        />
      ))}
    </div>
  )
}

export default Puzzle
