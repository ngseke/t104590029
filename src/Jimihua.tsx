import React from 'react'
import video from './assets/video.mp4'

export default function Jimihua () {

  return (
    <div className="fixed flex items-center justify-center w-full h-full">
      <video
        autoPlay
        loop
        playsInline
        controls
        className="w-full h-full object-contain"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}
