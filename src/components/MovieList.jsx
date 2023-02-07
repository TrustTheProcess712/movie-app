const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <div className='moviecard' key={movie.id}></div>
      ))}
    </div>
  );
};

export default MovieList;
