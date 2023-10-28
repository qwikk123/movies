import React, { useState, useEffect } from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://192.168.1.71:8080/api/movies/dbmovies/top10")
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setMovies(data)
        })
      }, [])

  return (
    <div className='movie-carousel-container'>
        <h1 className='custom-header'>Top Rated Movies</h1>
        <Carousel autoPlay={true} 
        swipe={false} 
        navButtonsAlwaysVisible={true} 
        duration={200} 
        stopAutoPlayOnHover={true}
        interval={7000}
        animation='fade'>
            {
                movies.map((movie) => {
                    return(
                        <Paper>
                            <div className='movie-card-container'>
                                <div className='movie-card'>
                                    <div className='movie-detail'>
                                        <div className='movie-poster-container'>
                                            <div className='movie-poster'>
                                                <img src={movie.posterLink} alt=''/>
                                            </div>
                                        </div>
                                        <div className='movie-text-container'>
                                            <div className='movie-title'>
                                                <h4>{movie.seriesTitle}</h4>
                                            </div>
                                            <div className='movie-description'>
                                                <p>{movie.overview}</p>
                                            </div>
                                            <div className='movie-description'>
                                                <p>{movie.genre}</p>
                                            </div>
                                            <div className='movie-rating'>
                                                <h4>{movie.imdbRating} / 10</h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero