import React, { useContext } from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { useInView } from "react-hook-inview"
import { PseudoButton } from "../FormElements"
import { Spacer } from "../Layout"
import ProgressBar from "../ProgressBar"
import { Paragraph, Subheading } from "../Typography"
import FeaturedImages from "../FeaturedImages"
import { ImageType } from "../../types"
import Icon from "../Icon"
import GlobalDOMContext from "../../context/global-dom-context"
import GiveLivelyWidget from "../GiveLivelyWidget"

export interface Props {
  id: string
  title: string
  progress: number
  body?: string
  images?: ImageType[]
  restorationComplete?: boolean
  campaignPageUrl: string
}

function FeatureItem(props: Props) {
  const { updateStore } = useContext(GlobalDOMContext)
  const [progressRef, progressInView] = useInView()
  const featuredImages = props.images || []

  function handleOnClick(e: any) {
    if (!updateStore) {
      return
    }

    e.preventDefault()

    updateStore({
      context: "modal",
      options: {
        fullscreen: true,
      },
      content: () => <GiveLivelyWidget />,
    })
  }

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between">
      <div className="w-full lg:w-3/5 md:flex lg:max-h-featuregallery">
        <FeaturedImages images={featuredImages} />
      </div>
      <div className="w-full lg:w-2/5 mt-6 md:mt-12 lg:mt-0 lg:pl-16 relative">
        <Subheading tag="h1" className="font-normal w-4/5">
          {props.title}
        </Subheading>

        {props.restorationComplete || props.progress === 100 ? (
          <span className="absolute top-2 right-0 rounded-full w-6 h-6 bg-white inline-flex justify-center items-center">
            <Icon.Tick fill="black" width={10} />
          </span>
        ) : null}

        {props.body ? (
          <MDXProvider
            components={{
              p: Paragraph.Base,
            }}
          >
            <MDXRenderer>{props.body}</MDXRenderer>
          </MDXProvider>
        ) : null}

        <Spacer className="mt-8" />

        <div className="flex justify-end">
          <PseudoButton
            onClick={handleOnClick}
            buttonStyle="squished"
            href={props.campaignPageUrl}
          >
            Restore
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
