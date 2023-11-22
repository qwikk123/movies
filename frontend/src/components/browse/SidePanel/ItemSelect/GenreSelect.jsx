import * as React from 'react';
import { useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./ItemSelect.css"

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function GenreSelect({ handleFilterChange, genre, updateGenre }) {
  const [genres, setGenres] = React.useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/api/movies/genre`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setGenres(data)
      updateGenre([])
    })
  }, [] )

  const handleChange = (value) => {
    console.log(value)
    updateGenre(value)
    handleFilterChange("genre", value)
  }

  return (
      <Autocomplete
        value={genre}
        multiple
        id="checkboxes-tags"
        options={genres}
        disableCloseOnSelect
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        style={{width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="Genres"/>
        )}
        onChange={(event, value) => handleChange(value)}
      />
  );
}