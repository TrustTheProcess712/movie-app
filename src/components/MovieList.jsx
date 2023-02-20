import Grid from "@mui/material/Grid";
import { useState } from "react";

const MovieList = ({ children }) => {
  return (
    <>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </>
  );
};

export default MovieList;
