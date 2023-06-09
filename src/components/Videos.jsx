import React from "react";
import VideoCard from "./VideoCard";
import "../styles/Videos.css";

const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((item, index) => (
        <VideoCard
          image={item.image}
          key={item.image}
          name={item.name}
          index={index}
        />
      ))}
    </div>
  );
};

export default Videos;
