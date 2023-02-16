import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieByID } from "../utils/api.js";

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const imgsrc = "https://image.tmdb.org/t/p/w1280" + selectedMovie.poster_path;

  useEffect(() => {
    setTimeout(() => {
      getMovieByID(id).then((movie) => {
        setSelectedMovie(movie);
        setLoading(false);
      });
    }, 1000);
  }, [id]);

  return (
    <div className='movie-details'>
      {loading && <h1>Loading...</h1>}
      {!loading && (
        <>
          <h1>{selectedMovie.title}</h1>
          <h3>Release Date:</h3>
          <p>{selectedMovie.release_date}</p>
          <h3>Runtime:</h3>
          <p>{selectedMovie.runtime} minutes</p>
          <div className='movie-img'>
            <img src={imgsrc} alt='movie poster' width='35%' />
          </div>
          <h3>Movie Overview:</h3>
          <p>{selectedMovie.overview}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
