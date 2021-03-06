import React, { useContext } from "react"
import cx from "classnames"
import Icon from "../Icon"
import GlobalDOMContext from "../../context/global-dom-context"
import Image from "../Image"
import { VideoType } from "../../types"

interface Props extends VideoType {
  className?: string
}

function VideoCard(props: Props) {
  const { updateStore = () => null } = useContext(GlobalDOMContext)
  return (
    <div
      onClick={() => {
        updateStore({
          context: "modal",
          content: () => (
            <iframe
              className="max-w-full"
              src={props.videoEmbedUrl}
              width="640"
              height="361"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        })
      }}
      className={cx(
        "VideoCard w-full relative cursor-pointer",
        props.className
      )}
    >
      <Image
        containerClassName="aspect-ratio aspect-ratio-16:9"
        className="w-full h-full"
        loading="lazy"
        {...props.coverImage.fluid}
      />
      <span className="absolute inset-1/2 w-20 h-20 bg-black border border-white rounded-full transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center transition-transform hover:scale-105 duration-700">
        <Icon.Play
          fill="white"
          width={32}
          className="transform -translate-y-1 translate-x-1"
        />
      </span>
    </div>
  )
}

export default VideoCard
