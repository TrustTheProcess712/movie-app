const MovieList = ({ movies }) => {
  const imgsrc = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <div className='moviecard' key={movie.id}>
          <h1>{movie.title}</h1>
          <img
            src={imgsrc + movie.poster_path}
            alt='movie-poster'
            width={200}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
