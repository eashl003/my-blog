import React from "react"; 

export default function Video() {
  return (
    <div class="bg-video-wrap">
    <video src="./background_video.mp4" autoPlay loop muted />
    <div class="overlay">
    </div>
     
  </div>
  );
}