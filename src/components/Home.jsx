import { Link, useNavigate } from "react-router-dom";
import { getRecentMovies } from "../utils/api.js";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/movies");
  };
  return (
    <div className='home-page'>
      <p>
        Welcome to my movie database, please click the link below for the latest
        top rated movies or use the search bar to find your favourite movies by
        title!
      </p>

      <button onClick={handleClick}>Latest Movies</button>
      <img
        className='home-image'
        src='https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?b=1&k=20&m=1007557230&s=612x612&w=0&h=2ZZaKPuR-AfPav0cxVB5XG-fMoMSHz1_wpggcR3p9co='
        alt='movie-pic'
      />
    </div>
  );
};

export default Home;
