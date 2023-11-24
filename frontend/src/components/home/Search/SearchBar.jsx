import { StyledEngineProvider, Button } from "@mui/material";
import "./SearchBar.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [textField, setTextField] = useState("");

  return (
    <StyledEngineProvider injectFirst>
      <div className="search-container">
        <form>
          <TextField
            autoComplete="off"
            onChange={(text) => {
              setTextField(text.target.value);
            }}
            label="Search for top rated movies!"
            id="fullWidth"
            style={{ width: "900px" }}
            variant="filled"
          ></TextField>
          <Link to={`/browse/${textField != "" ? `?title=${textField}` : ""}`}>
            <Button
              type="submit"
              sx={{ borderRadius: "0px" }}
              style={{
                width: "100px",
                height: "100%",
                background: "rgb(3, 50, 80)",
                color: "white",
              }}
              variant="contained"
              disableElevation
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
            </Button>
          </Link>
        </form>
      </div>
    </StyledEngineProvider>
  );
};

export default SearchBar;
