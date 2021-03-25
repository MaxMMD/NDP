import React from "react"
import cx from "classnames"
import { ArtefactType, Node } from "../../types"
import framepng from "../../assets/fond_frame.png"

import "./PuzzlePiece.css"
import Link from "../Link"

export interface Props {
  id: number
  flipped?: boolean
  card?: Node<ArtefactType>
  disableFlip?: boolean
  cardLinkPath?: string
}

function PuzzlePiece({ cardLinkPath = "/gallery", ...props }: Props) {
  if (!props.id) {
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

  return (
    <div className="PuzzlePiece w-1/6">
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
                  <div
                    className={cx(
                      "flip-card-back absolute w-full h-full bg-black border border-white",
                      {
                        "p-6 border-opacity-10": !hasImage,
                        "border-opacity-60": hasImage,
                      }
                    )}
                  >
                    <img
                      className={cx("w-full h-full", {
                        "opacity-50": !hasImage,
                      })}
                      {...reverseImage}
                    />
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
