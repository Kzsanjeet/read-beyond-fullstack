import React from 'react'
import "../specificcss/video.css"

const Video = () => {
  return (
    <div>
      <iframe 
      src="https://youtu.be/1Cw1ng75KP0?si=PAc_ilLKZYQSiGjQ" 
      width="100%"
      height="315"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default Video
