import React from "react"
import cx from "classnames"
import TransitionWrapper, { TransitionState } from "../TransitionWrapper"
import { Paragraph } from "../Typography"

export interface Props {
  className?: string
  isVisible?: boolean
  onClick?: () => void
}

function InfoPane(props: Props) {
  return (
    <TransitionWrapper isVisibleOnLoad={props.isVisible} duration={700}>
      {transition =>
        transition.isVisible ? (
          <div
            className={cx(
              "border border-white border-opacity-60 bg-black px-6 z-20 transition duration-700",
              props.className,
              {
                "opacity-0": transition.transitionState === TransitionState.OUT,
                "opacity-100":
                  transition.transitionState === TransitionState.IN,
              }
            )}
            onClick={props.onClick}
          >
            <Paragraph.Base>
              Hover over a puzzle piece to reveal the artefact. Click on the
              artefact to learn more.
            </Paragraph.Base>
            <Paragraph.Base>
              Puzzle pieces in white are fully restored.
            </Paragraph.Base>
          </div>
        ) : (
          <></>
        )
      }
    </TransitionWrapper>
  )
}

export default InfoPane
