import React from "react";
import styles from './video_detail.module.css';

const VideoDetail = ({video}) => {
    console.log(video)
    return (
    <section className={styles.detail}>
        <iframe 
            title={video.title}
            className={styles.video}
            type="text/html"
            width="100%"
            height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen>
        </iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>
    </section>
    );
}

export default VideoDetail;