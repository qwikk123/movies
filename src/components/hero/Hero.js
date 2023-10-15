import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({movies}) => {
  return (
    <div className='movie-carousel-container'>
        <Carousel>
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
                                        <div className='movie-title-container'>
                                            <div className='movie-title'>
                                                <h4 className>{movie.seriesTitle}</h4>
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