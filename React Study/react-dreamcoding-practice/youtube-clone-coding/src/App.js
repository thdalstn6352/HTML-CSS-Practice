import './App.css';
import {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD_rH1oZSxREcvlsn0KMch1WJ-1ngxO14A";
    fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setVideos(result.items);
    })
    .catch((error) => console.log(error))
  }, [])
  return <VideoList videos={videos} />;
}

export default App;
