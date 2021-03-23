import React, { useEffect, useState } from "react"
import { useInView } from "react-hook-inview"
import { PseudoButton } from "../FormElements"
import Image from "../Image"
import { Spacer } from "../Layout"
import ProgressBar from "../ProgressBar"
import { Paragraph, Subheading } from "../Typography"

export interface Props {
  progress: number
}

function FeatureItem(props: Props) {
  const [progressRef, progressInView] = useInView()

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between">
      <div className="lg:w-3/5 md:flex">
        <div className="w-full md:w-1/3 md:flex md:flex-col md:pr-4">
          <div className="overflow-hidden w-full h-full border border-gray-600 mb-2">
            <Image
              containerClassName="h-full"
              className="w-full h-full object-cover"
              src="https://placehold.it/250x330/323333"
              width="250"
              height="330"
            />
          </div>
          <div className="overflow-hidden w-full h-full border border-gray-600 mt-2 mb-2 md:mb-0">
            <Image
              containerClassName="h-full"
              className="w-full h-full object-cover"
              src="https://placehold.it/250x330/323333"
              width="250"
              height="330"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="overflow-hidden w-full h-full border border-gray-600">
            <Image
              containerClassName="h-full"
              className="w-full h-full object-cover"
              src="https://placehold.it/500x660/323333"
              width="500"
              height="660"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-2/5 mt-6 md:mt-12 lg:mt-0 lg:pl-16">
        <Subheading tag="h1" className="font-normal">
          Name of Artifact
        </Subheading>
        <Paragraph.Base>
          Lorem in exercitation elit esse minim fugiat. Pariatur exercitation ex
          ipsum tempor enim proident. Nulla aliquip ad ipsum amet duis consequat
          duis sint enim cupidatat commodo pariatur. Veniam cupidatat id cillum
          dolore. Aute ullamco minim proident id. Cupidatat ad anim cupidatat
          consectetur ex.
        </Paragraph.Base>
        <Paragraph.Base>
          Est ad non commodo occaecat incididunt aliqua enim ipsum consequat
          labore anim. Officia fugiat proident tempor ut nisi laborum excepteur
          tempor ullamco aliquip anim irure. Incididunt aliqua sint amet officia
          elit duis esse minim.
        </Paragraph.Base>

        <Spacer className="mt-8" />

        <div className="flex justify-end">
          <PseudoButton href="#">Donate</PseudoButton>
        </div>

        <Spacer className="mt-8" />

        <span className="block text-sm mb-1">Restoration progress</span>
        <ProgressBar width={progressInView ? props.progress : 0} />
        <span ref={progressRef} />
      </div>
    </div>
  )
}

export default FeatureItem
