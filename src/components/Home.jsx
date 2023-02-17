import { Link } from "react-router-dom";
import { getRecentMovies } from "../utils/api.js";

const Home = ({ setMovies }) => {
  // const handleClick = () => {
  //   getRecentMovies().then((moviesFromAPI) => {
  //     console.log(moviesFromAPI);
  //     setMovies(moviesFromAPI);
  //   });
  // };

  return (
    <div className='home-page'>
      <p>
        Welcome to my movie database, please click the link below for the latest
        top rated movies or use the search bar to find your favourite movies by
        title!
      </p>
      {/* <img src='' alt='' /> */}
      <Link to='/movies'>
        <button type='submit'>Latest Movies</button>
      </Link>
    </div>
  );
};

export default Home;
