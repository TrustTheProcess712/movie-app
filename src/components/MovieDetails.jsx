import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieByID } from "../utils/api.js";

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const { id } = useParams();

  const imgsrc = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    setTimeout(() => {
      getMovieByID(id).then((movie) => {
        setSelectedMovie(movie);
      });
    });
  }, [id]);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-details'>
      <h1>{selectedMovie.title}</h1>
      <section>
        <h3>Release Date:</h3>
        <p>{selectedMovie.release_date}</p>
      </section>
      <section>
        <h3>Runtime:</h3>
        <p>{selectedMovie.runtime} minutes</p>
      </section>
      <div className='movie-img'>
        <img
          src={imgsrc + selectedMovie.poster_path}
          alt='movie poster'
          width='35%'
        />
      </div>
      <h3>Movie Overview:</h3>
      <p>{selectedMovie.overview}</p>
    </div>
  );
};

export default MovieDetails;
