import axios from "axios";

const API = process.env.REACT_APP_API_KEY;

const myAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export const getAllMovies = async () => {
  const movieData = await myAPI
    .get(`/discover/movie?sort_by=popularity.desc&api_key=${API}&page=1`)
    .then(({ data }) => {
      return data.results;
    });
  return movieData;
};

export const getSearchedMovies = async (searchValue) => {
  const movieData = await myAPI
    .get(`/search/movie?&api_key=${API}&query=${searchValue}`)
    .then(({ data }) => {
      return data.results;
    });
  return movieData;
};

export const getMovieByID = async (id) => {
  const movieData = await myAPI
    .get(`/movie/${id}?api_key=${API}&language=en-US`)
    .then(({ data }) => {
      return data;
    });
  return movieData;
};
