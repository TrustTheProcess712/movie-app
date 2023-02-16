import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";

import { useState, useEffect } from "react";
import { getAllMovies, getSearchedMovies } from "./utils/api.js";
import Header from "./components/Header.jsx";
// import Home from "./components/Home.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getAllMovies().then((moviesFromAPI) => {
        if (searchValue === "") {
          setMovies(moviesFromAPI);
          setLoading(false);
        } else if (searchValue.length > 1) {
          getSearchedMovies(searchValue)
            .then((searchResults) => {
              console.log(searchResults);
              if (searchResults.length < 1) {
                setError(true);
                throw Error(
                  "sorry, could not fetch data for that movie title..."
                );
              } else {
                setMovies(searchResults);
                setLoading(false);
              }
            })
            .catch((err) => {
              setLoading(false);
              setError(err.message);
            });
        }
      });
    }, 500);
  }, [searchValue]);

  return (
    <BrowserRouter>
      <div className='App'>
        <Container>
          <Header title='SM Movies DB' />
          <SearchBar setSearchValue={setSearchValue} />
          <Routes>
            <Route
              path='/movie'
              element={
                <MovieList>
                  <MovieCard movies={movies} error={error} loading={loading} />
                </MovieList>
              }></Route>
            <Route path='/movie/:id' element={<MovieDetails />}></Route>
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
