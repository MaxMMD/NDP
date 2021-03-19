import React from "react"
import cx from "classnames"
import Icon from "../Icon"

interface Props {
  className?: string
}

function VideoCard(props: Props) {
  return (
    <div className={cx("VideoCard relative", props.className)}>
      <img src="https://placehold.it/600x400" width={600} height={400} />
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
