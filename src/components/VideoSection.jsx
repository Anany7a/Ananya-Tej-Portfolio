import React from 'react'

const VideoSection = () => {
  return (
    <div id="video-section" className="w-full min-h-screen py-24 bg-zinc-900/50 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Showreel</h2>
          <div className="aspect-video w-full bg-zinc-800 rounded-lg shadow-2xl overflow-hidden h-[80vh] max-h-[800px]">
            <iframe
              src="https://drive.google.com/file/d/1P3_IxS97A2p_CUogodIV5BdU7SXIP-bS/preview"
              allow="autoplay"
              className="w-full h-full"
              title="Showreel video"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
