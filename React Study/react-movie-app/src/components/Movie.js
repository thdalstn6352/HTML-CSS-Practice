import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, summary, genres, imageURL }) {
  return (
    <div>
      <img src={imageURL} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      {genres === undefined ? null : (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
