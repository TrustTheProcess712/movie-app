import MovieCard from "./MovieCard.jsx";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieByID } from "../utils/api.js";

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getMovieByID(id).then((movie) => {
      setSelectedMovie(movie);
    });
  });

  return;

  <h1>{selectedMovie.title}</h1>;
};

export default MovieDetails;
