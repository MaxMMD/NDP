import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { useInView } from "react-hook-inview"
import { PseudoButton } from "../FormElements"
import { Spacer } from "../Layout"
import ProgressBar from "../ProgressBar"
import { Paragraph, Subheading } from "../Typography"
import FeaturedImages from "../FeaturedImages"
import { ImageType } from "../../types"

export interface Props {
  id: string
  title: string
  progress: number
  body?: string
  images?: ImageType[]
}

function FeatureItem(props: Props) {
  const [progressRef, progressInView] = useInView()
  const featuredImages = props.images || []

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between">
      <div className="lg:w-3/5 md:flex lg:max-h-featuregallery">
        <FeaturedImages images={featuredImages} />
      </div>
      <div className="lg:w-2/5 mt-6 md:mt-12 lg:mt-0 lg:pl-16">
        <Subheading tag="h1" className="font-normal">
          {props.title}
        </Subheading>
        {props.body ? (
          <MDXProvider
            components={{
              p: Paragraph.Base,
            }}
          >
            <MDXRenderer>{props.body}</MDXRenderer>
          </MDXProvider>
        ) : (
          <>
            <Paragraph.Base>
              PLACEHOLDER CONTENT Lorem in exercitation elit esse minim fugiat.
              Pariatur exercitation ex ipsum tempor enim proident. Nulla aliquip
              ad ipsum amet duis consequat duis sint enim cupidatat commodo
              pariatur.
            </Paragraph.Base>
            <Paragraph.Base>
              Est ad non commodo occaecat incididunt aliqua enim ipsum consequat
              labore anim. Officia fugiat proident tempor ut nisi laborum
              excepteur tempor ullamco aliquip anim irure.
            </Paragraph.Base>
          </>
        )}

        <Spacer className="mt-8" />

        <div className="flex justify-end">
          <PseudoButton buttonStyle="squished" href="#">
            Donate
          </PseudoButton>
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
