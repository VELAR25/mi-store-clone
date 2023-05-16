import React from "react";
import "../styles/VideoCard.css";

const playButton = <i class="fa fa-play"></i>;

const VideoCard = ({ image, name, index }) => {
  return (
    <div className="video_card" style={{ backgroundImage: `url(${image})` }}>
      <a href="#/">{playButton}</a>
      <p>{name}</p>
    </div>
  );
};

export default VideoCard;
