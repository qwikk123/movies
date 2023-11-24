import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

export default function TitleSearch({ handleFilterChange, title, setTitle }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(title);
  }, [title]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed. Value:", event.target.value);
      setTitle(event.target.value);
      handleFilterChange("title", event.target.value);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      sx={{ width: 500 }}
      label="Title"
      variant="filled"
      autoComplete="off"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      value={value}
    />
  );
}
