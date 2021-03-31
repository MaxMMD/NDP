import React from "react"
import Icon from "../Icon"
import { Spacer } from "../Layout"
import { Paragraph, ParagraphBase } from "../Typography"

function PuzzleInfoContent() {
  return (
    <div className="relative pb-8">
      <Paragraph.Base>
        Hover the image to discover each piece of work and to explore the
        puzzle.
      </Paragraph.Base>
      <Paragraph.Base>
        Each piece represents an artifact within the cathedral that needs
        restoration.
      </Paragraph.Base>

      <div className="border-t border-white border-b py-2 flex justify-between">
        <ParagraphBase className="text-md font-normal m-0">Key</ParagraphBase>
        <div className="flex">
          <span className="flex items-center">
            <span className="inline-block w-4 h-4 overflow-hidden bg-white border border-white border-opacity-60" />
            <ParagraphBase className="text-md font-light inline m-0 pl-2">
              Restored
            </ParagraphBase>
          </span>
          <span className="flex items-center ml-4">
            <span className="inline-block w-4 h-4 overflow-hidden bg-black border border-white border-opacity-60" />
            <ParagraphBase className="text-md font-light inline m-0 pl-2">
              Not restored
            </ParagraphBase>
          </span>
        </div>
      </div>
      <span className="absolute -top-4 -right-4 cursor-pointer">
        <Icon.Close />
      </span>
    </div>
  )
}

export default PuzzleInfoContent
