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
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(movies);

  useEffect(() => {
    getRecentMovies().then((moviesFromAPI) => {
      if (searchValue.length < 1) {
        setMovies(moviesFromAPI);
        setLoading(false);
      } else if (searchValue) {
        getSearchedMovies(searchValue)
          .then((results) => {
            setMovies(results);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setError(err.message);
          });
      }
    });
  }, [searchValue]);

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Container>
            <Header title='Movies DB' />
            <SearchBar
              setSearchValue={setSearchValue}
              defaultList={defaultList}
            />
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
