import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const MovieCard = ({movie, height = 180}) => {
    return (
        <Card sx={{ maxWidth: "150px", border: "1px solid rgb(56, 61, 63)"}}>
          <CardActionArea component={Link} to={`/movie/${movie.movieID}`}>
            <CardMedia
              component="img"
              image={movie.posterLink}
              alt="Movie Poster"
              sx={{objectFit: "cover", height: `${height}px`}}
            />
            <CardContent sx={{padding: "10px"}}>
            <Box
                sx={{
                  position: "absolute",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: "-35px",
                  marginLeft: "-5px"
                }}
              >
                <CircularProgress 
                variant='determinate'
                value={100}
                thickness={22}
                size={44}
                sx={{position: "absolute", left: -2, color: "rgb(6, 22, 27)"}}
                />
                <CircularProgress 
                variant='determinate' 
                value={100}
                thickness={3}
                sx={{position: "absolute", left: 0, color: "rgb(32, 69, 41)"}}
                />
                <CircularProgress
                variant="determinate" 
                value={movie.imdbRating*10}
                thickness={3}
                sx={{color: "rgb(33, 208, 122)"}}
                />
                <Typography position="absolute" variant="caption" component="div" sx={{fontWeight: "bold"}}>
                {movie.imdbRating}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: "column",
                  paddingTop: "10px",
                }}
              >
                <Typography variant="body2" sx={{textAlign: "left"}}>
                    {movie.seriesTitle}
                </Typography>
                <Typography variant="body2" sx={{textAlign: "left", marginTop: "5px"}}>
                    {movie.releasedYear}
                </Typography>
              </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      );
}

export default MovieCard