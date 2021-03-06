import React from "react"
import cx from "classnames"
import { ArtefactType, Node } from "../../types"
import framepng from "../../assets/fond_frame.png"
import Link from "../Link"
import Icon from "../Icon"
import "./PuzzlePiece.css"

export interface Props {
  className?: string
  index: number
  flipped?: boolean
  card?: Node<ArtefactType>
  disableFlip?: boolean
  cardLinkPath?: string
}

function PuzzlePiece({ cardLinkPath = "/gallery", ...props }: Props) {
  if (!props.index && props.index !== 0) {
    return null
  }

  const slug = props?.card?.node?.slug
  const hasImage = !!props.card?.node?.images?.[0]?.resize
  const reverseImage = hasImage
    ? props.card?.node?.images?.[0]?.resize
    : {
        src: framepng,
        width: 50,
        height: 50,
      }

  const LinkWrapper = ({ children }: any) =>
    slug ? <Link href={`${cardLinkPath}/${slug}`}>{children}</Link> : children

  const restorationComplete =
    props.card?.node?.restorationComplete ||
    props.card?.node?.restorationProgress === 100

  let puzzleImgSrc = `/images/puzzle-pieces-latest/ND_Outline_Thicker_16.04.21-${(
    props.index + 1
  ).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}.svg`

  // let puzzleImgSrc = `/images/puzzle-pieces-test/ND_Outline_Updated-${(
  //   props.index + 1
  // ).toLocaleString("en-US", {
  //   minimumIntegerDigits: 2,
  //   useGrouping: false,
  // })}.svg`

  // if (props.id < 6) {
  //   puzzleImgSrc = `/images/puzzle-pieces-test/ND_Puzzle_Outline_Test-${props.id.toLocaleString(
  //     "en-US",
  //     {
  //       minimumIntegerDigits: 2,
  //       useGrouping: false,
  //     }
  //   )}.svg`
  // }

  return (
    <div className={cx("PuzzlePiece w-1/6", props.className)}>
      <div className="aspect-ratio">
        <div className="aspect-ratio-1:1">
          <LinkWrapper>
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
                  className={cx("absolute w-full h-full", {
                    "flip-card-front": !props.disableFlip,
                    "bg-white": restorationComplete,
                  })}
                >
                  <img
                    className={cx("w-full h-full", {
                      invert: restorationComplete,
                    })}
                    width={50}
                    height={50}
                    src={puzzleImgSrc}
                    alt={`${props.card?.node?.title || "Piece"} preview`}
                  />
                </div>
                {!props.disableFlip ? (
                  <div
                    className={cx(
                      "flip-card-back absolute w-full h-full border border-white",
                      {
                        "bg-black": !restorationComplete,
                        "bg-white": restorationComplete,
                        "p-6 border-opacity-10": !hasImage,
                        "p-2 border-opacity-60": hasImage,
                      }
                    )}
                  >
                    <img
                      className={cx("w-full h-full", {
                        "opacity-50": !hasImage,
                      })}
                      {...reverseImage}
                    />
                    {restorationComplete ? (
                      <span className="rounded-full w-6 h-6 bg-white inline-flex justify-center items-center absolute inset-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <Icon.Tick fill="black" width={10} />
                      </span>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </LinkWrapper>
        </div>
      </div>
    </div>
  )
}

export default PuzzlePiece
