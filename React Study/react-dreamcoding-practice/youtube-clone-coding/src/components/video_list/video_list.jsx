import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'
const VideoList = ((props) => {
    return <ul className={styles.videos}>
        {props.videos.map((video) => {
            console.log(video);
            return <VideoItem key={video.id.videoId === undefined ? video.id : video.id.videoId} video={video}/>
        })}
    </ul>
});

export default VideoList;