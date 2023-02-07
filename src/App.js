import "./index.css";
import { useState, useEffect } from "react";
import Header from 
import SearchBar from 
import MovieList from 

function App() {
  const [searchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([])



  return <div className='App'>
    <Header title="Ste's Movies"></Header>
    <SearchBar setSearchValue={setSearchValue}></SearchBar>
    <MovieList movies={movies}></MovieList>
  </div>;
}

export default App;
