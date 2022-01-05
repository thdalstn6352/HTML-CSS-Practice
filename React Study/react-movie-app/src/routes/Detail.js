import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const result = await response.json();
    setMovie(result.data.movie);
  };
  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      <h1>Detail</h1>
      <img src={movie.medium_cover_image} alt="cover" />
    </div>
  );
}

export default Detail;
