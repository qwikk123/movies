import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import MoviePage from "./components/moviepage/MoviePage";
import Browse from "./components/browse/Browse";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="browse/" element={<Browse />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
