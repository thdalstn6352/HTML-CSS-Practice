import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const result = await response.json();
    setLoading(false);
    setMovies(result.data.movies);
  };

  useEffect(() => getMovies(), []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              summary={movie.summary}
              id={movie.id}
              genres={movie.genres}
              imageURL={movie.medium_cover_image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
