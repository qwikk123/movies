import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./ItemSelect.css"

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function ActorSelect({ handleFilterChange, actors, updateActors }) {

  const handleChange = (value) => {
    console.log(value)
    updateActors(value)
    handleFilterChange("actor", value)
  }

  return (
      <Autocomplete
        value={actors}
        multiple
        id="checkboxes-tags"
        options={[]}
        freeSolo
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
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label={"Actors"}/>
        )}
        onChange={(event, value) => handleChange(value)}
      />
  );
}