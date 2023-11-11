import { Button, StyledEngineProvider } from '@mui/material';
import './SearchBar.css'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const SearchBar = () => {

    const [textField, setTextField] = useState("")
    const navigate = useNavigate()

    const onFormSubmit = (e) => {
      e.preventDefault()
      navigate(`/browse/title=${textField}`)
    }

    return (
      <StyledEngineProvider injectFirst>
      <div className='search-container'>
        <form>
          <TextField
            autoComplete='off'
            onChange={text => {
              setTextField(text.target.value)}
            }
            onSubmit={onFormSubmit}
            label="Search for top rated movies!"
            id='fullWidth'
            style={{width: "900px"}}
            variant='filled'>
          </TextField>
          <Link to={`/browse/title=${textField}`} >
            <Button
            type='submit'
            style={{width: "100px", height: "100%", 
            background: "rgb(3, 50, 80)",
            color: "white"}}
            variant='contained' 
            disableElevation>Search
            </Button>
          </Link>
        </form>
      </div>
      </StyledEngineProvider>
    )
  }
  
  export default SearchBar