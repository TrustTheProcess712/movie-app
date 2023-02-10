import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const MovieCard = ({ movies }) => {
  const imgsrc = "https://image.tmdb.org/t/p/w1280";

  console.log(movies);

  return (
    <>
      {movies.map((movie) => {
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
                <Link to={`/movies/${movie.id}`}>
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