import './MoviePage.css';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const MoviePage = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:8080/api/movies/"+id)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setMovie(data)
        }).finally( () =>{
            setLoading(false)
        })
    }, [id])

    if (loading) {
        return <h1>LOADING...</h1>
    }

    return (
        <div className='movie-card'>
            <div className='movie-detail'>
                <div className='movie-poster-container'>
                    <div className='movie-poster'>
                        <img src={movie.posterLink} alt=''/>
                    </div>
                </div>
                <div className='movie-text-container'>
                    <div className='movie-title'>
                        <h3>{movie.seriesTitle}</h3>
                    </div>
                    <div className='movie-description'>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='movie-description'>
                        <p>{movie.genre.map((x) => x.name).join(", ")}</p>
                    </div>
                    <div className='movie-description'>
                        <p>Starring: {movie.starring.map((x) => x.name).join(", ")}</p>
                    </div>
                    <div className='movie-rating'>
                        <h4>{movie.imdbRating} / 10</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MoviePage