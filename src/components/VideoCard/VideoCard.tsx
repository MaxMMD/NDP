import React, { useContext } from "react"
import cx from "classnames"
import Icon from "../Icon"
import GlobalDOMContext from "../../context/global-dom-context"
import Image from "../Image"

interface Props {
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
              src="https://player.vimeo.com/video/497740215"
              width="640"
              height="361"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        })
      }}
      className={cx("VideoCard w-full relative", props.className)}
    >
      <Image
        containerClassName="aspect-ratio aspect-ratio-16:9"
        className="w-full h-full"
        src="https://placehold.it/600x400"
        width={600}
        height={400}
      />
      <span className="absolute inset-1/2 w-20 h-20 bg-black border border-white rounded-full transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
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
