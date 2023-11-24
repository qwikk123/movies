import MovieCard from "../moviecard/MovieCard";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import "./MovieRow.css";
import { CircularProgress } from "@mui/material";

const MovieRow = ({ url, title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/${url}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className="center-container">
      <div className="grid-container">
        <h2 style={{ textAlign: "left", paddingBottom: "10px" }}>{title}</h2>
        <Grid container spacing={1} columns={{ xs: 4, sm: 12, md: 20 }}>
          {movies.map((movie) => (
            <Grid xs={1} sm={3} md={2} key={movie.movieID}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default MovieRow;
