import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";
const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        console.log(video);
        return (
          <VideoItem
            key={video.id.videoId === undefined ? video.id : video.id.videoId}
            video={video}
            onVideoClick={onVideoClick}
            display={display}
          />
        );
      })}
    </ul>
  );
};

export default VideoList;
