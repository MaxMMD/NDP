import { withPrefix } from "gatsby-link"
import React, { useEffect, useRef, useState } from "react"
import cx from "classnames"
import audioIcon from "../../assets/audio.png"
import audioIconMuted from "../../assets/audio_muted.png"

function SoundFile() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!audioRef.current) {
      return
    }

    function onPlay() {
      setIsPlaying(true)
    }

    function onPause() {
      setIsPlaying(false)
    }

    audioRef.current.addEventListener("play", onPlay)
    audioRef.current.addEventListener("pause", onPause)

    return () => {
      if (!audioRef.current) {
        return
      }

      audioRef.current.removeEventListener("play", onPlay)
      audioRef.current.removeEventListener("pause", onPause)
    }
  }, [audioRef, setIsPlaying])

  function handleOnClick() {
    if (!audioRef.current) {
      return
    }
    if (audioRef.current.paused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  return (
    <figure
      onClick={handleOnClick}
      className="relative w-8 h-8 overflow-hidden cursor-pointer"
    >
      <audio
        ref={audioRef}
        className="invisible absolute"
        autoPlay
        loop
        src={withPrefix("/media/audio_bg.m4a?t=10022022")}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <span className="">
        <img
          className={cx(
            "absolute top-0 left-0 opacity-0 transition duration-700 max-w-full",
            {
              "opacity-100": !isPlaying,
            }
          )}
          src={audioIcon}
          width={148}
          height={113}
        />
        <img
          className={cx("absolute top-0 left-0 max-w-full")}
          src={audioIconMuted}
          width={148}
          height={113}
        />
      </span>
    </figure>
  )
}

export default SoundFile
