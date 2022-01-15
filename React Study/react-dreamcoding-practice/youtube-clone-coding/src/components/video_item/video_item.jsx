import React from "react";
import styles from './video_item.module.css';

const VideoItem = (({video, onVideoClick, display}) => {
    const handleClick = () => {
        onVideoClick(video);
    }
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
        <li className={`${styles.container} ${displayType}`} onClick={handleClick}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                <div className={styles.metadata}>
                    <p className={styles.title}>{video.snippet.title}</p>
                    <p className={styles.channel}>{video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
})

export default VideoItem;