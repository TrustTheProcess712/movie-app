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

  useEffect(() => {
    getAllMovies().then((moviesFromAPI) => {
      if (searchValue === "") {
        setMovies(moviesFromAPI);
      } else if (searchValue.length > 1) {
        getSearchedMovies(searchValue).then((searchResults) => {
          setMovies(searchResults);
        });
      }
    });
  }, [searchValue]);

  // if (!movies) {
  //   <h1>Loading...</h1>;
  // }

  return (
    <BrowserRouter>
      <div className='App'>
        <Container>
          <Header title='SM Movies DB' />
          <SearchBar setSearchValue={setSearchValue} />
          <Routes>
            <Route
              path='/'
              element={
                <MovieList>
                  <MovieCard movies={movies} />
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
