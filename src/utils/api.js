import axios from "axios";

const API = process.env.REACT_APP_API_KEY;

const myAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export function getAllMovies() {
  return myAPI
    .get(`/discover/movie?sort_by=popularity.desc&api_key=${API}&page=1`)
    .then(({ data }) => {
      return data.results;
    });
}

export function getSearchedMovies(searchValue) {
  return myAPI
    .get(`/search/movie?&api_key=${API}&query=${searchValue}`)
    .then(({ data }) => {
      return data.results;
    });
}

export function getMovieByID(id) {
  return myAPI

    .get(`/movie/${id}?api_key=${API}&language=en-US`)
    .then(({ data }) => {
      console.log(data, "data");
      return data.results;
    });
}
