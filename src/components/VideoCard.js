import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoFooter from "./VideoFooter";
import VideoHeader from "./VideoHeader";

function VideoCard({ channel, avatarSrc, song, url, likes, shares }) {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        type="video/mp4"
        src={url}
        alt="IG reel video"
        loop
      />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
      />
    </div>
  );
}

export default VideoCard;
