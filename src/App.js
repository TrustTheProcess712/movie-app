import "./index.css";
import { useState, useEffect } from "react";
import { getAllMovies, getSearchedMovies } from "./api.js";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList.jsx";

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

  return (
    <div className='App'>
      <Header title="Ste's Movies"></Header>
      <SearchBar setSearchValue={setSearchValue}></SearchBar>
      <MovieList movies={movies}></MovieList>
    </div>
  );
}

export default App;
