import * as React from 'react';
import { useEffect } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
      width: 280,
    },
  },
};

export default function GenreSelect({ handleFilterChange, genre, updateGenre }) {
  const [genres, setGenres] = React.useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/api/movies/genre/all`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setGenres(data)
      updateGenre([])
    })
  }, [] )

  const handleChange = (event) => {
    console.log(event.target.value)
    const {
      target: { value },
    } = event;
    updateGenre(value)
    handleFilterChange("genre", event.target.value)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 280 }}>
        <InputLabel id="demo-multiple-checkbox-label">Genre</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={genre}
          onChange={handleChange}
          input={<OutlinedInput label="Genre" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {genres && genres.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={genre.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}