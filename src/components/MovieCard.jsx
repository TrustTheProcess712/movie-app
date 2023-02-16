import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

const MovieCard = ({ movies, loading, error }) => {
  const imgsrc = "https://image.tmdb.org/t/p/w1280";

  console.log(error);
  return (
    <>
      {error && <p>{error}</p>}
      {loading && <h1>Loading...</h1>}
      {!loading &&
        !error &&
        movies.map((movie) => {
          return (
            <Grid key={movie.id} item xs={3}>
              {/* <h3>{movie.title}</h3> */}
              <Card
                square
                elevation={10}
                // variant='outlined'
                sx={{
                  maxWidth: 200,
                  minWidth: 200,
                  maxHeight: 300,
                  marginBottom: "1.5rem",
                  marginLeft: "2.25rem",
                }}>
                <CardActionArea>
                  <Link to={`/movie/${movie.id}`}>
                    <CardMedia
                      component='img'
                      image={imgsrc + movie.poster_path}
                      width={200}
                      height={300}
                      alt='movie-poster'
                    />
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
    </>
  );
};

export default MovieCard;
