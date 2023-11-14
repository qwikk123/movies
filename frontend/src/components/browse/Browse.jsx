import MovieCard from "../moviecard/MovieCard"
import { useEffect, useState } from "react"
import Grid from '@mui/material/Unstable_Grid2';
import "./Browse.css"
import { useSearchParams } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import SidePanel from "./SidePanel/SidePanel";

const Browse = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const pageSize = "size=18"

    const fetchData = async (p) => {
      const response = await fetch(`http://localhost:8080/api/movies/filter?page=${p}&${pageSize}&${searchParams.toString()}`)
      const data = await response.json()
      if (p === 0) {
        setMovies(data)
      }
      else {
        setMovies([...movies, ...data])
      }
      setPage(p+1)
    }
    
    const fetchPage = async () => {
      fetchData(page).finally(setLoading(false))
    }

    useEffect(() => {
      setPage(0)
      setMovies([])
      fetchData(0).finally(setLoading(false))
    }, [searchParams])

    function handleFilterChange (key , value) {
      setSearchParams(prevParams => {
        if (value.length === 0) {
          prevParams.delete(key)
        }
        else {
            prevParams.set(key, value.join(","))
          }
          return prevParams
        })
      }

    if (loading) {
        return <CircularProgress />
    }
    return (
      <div className="center-container" style={{marginTop: "70px", marginLeft: "240px"}}>
        <div className="sidepanel-container">
        <SidePanel handleFilterChange={ (key, value) => handleFilterChange(key, value)}/>
        </div>
        <div className="grid-container">
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}>
            {movies.map(movie => (
              <Grid xs={1} sm={3} md={2} key={movie.movieID}>
                <MovieCard movie={movie}/>
              </Grid>
            ))}
          </Grid>
        </div>
        <Button
            style={{width: "150px", height: "100%", 
            background: "rgb(3, 50, 80)",
            color: "white",
            padding: "10px",
            marginTop: "20px"}}
            variant='contained' 
            disableElevation
            onClick={fetchPage}>Load More
        </Button>
      </div>
    )
}

export default Browse