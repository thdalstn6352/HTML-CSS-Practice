import styles from './App.module.css';
import {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';
import Navbar from './components/navbar/navbar';
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=> {
    youtube.mostPopular()
    .then(videos => setVideos(videos));
  }, []);

  const handleSearch = (query) => {
    youtube.search(query)
    .then(videos => setVideos(videos))
  };

  const selectVideo = ((video) => {
    setSelectedVideo(video);
  })
  
  return <div className={styles.app}>
    <Navbar onSubmit={handleSearch}/>
    <section className={styles.content}>
      {selectedVideo && 
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo}/>
        </div>
      }
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
      </div>
    </section>
  </div>
  
}

export default App;
