import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "@mui/material/Container";

import { useState, useEffect } from "react";
import { getRecentMovies, getSearchedMovies } from "./utils/api.js";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList.jsx";
import MovieCard from "./components/MovieCard.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchValue === "") {
      getRecentMovies().then((moviesFromAPI) => {
        setLatestMovies(moviesFromAPI);
        setMovies(moviesFromAPI);
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    if (searchValue) {
      getSearchedMovies(searchValue)
        .then((results) => {
          setMovies(results);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(err.message);
        });
    }
  }, [searchValue]);

  const handleHeaderClick = () => {
    setMovies(latestMovies);
  };
  console.log(movies);

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Container>
            <Header title='Movies DB' handleHeaderClick={handleHeaderClick} />
            <SearchBar setSearchValue={setSearchValue} setError={setError} />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route
                path='/movies'
                element={
                  <MovieList setMovies={setMovies}>
                    <MovieCard
                      movies={movies}
                      error={error}
                      loading={loading}
                    />
                  </MovieList>
                }></Route>

              <Route path='/movies/:id' element={<MovieDetails />}></Route>
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
