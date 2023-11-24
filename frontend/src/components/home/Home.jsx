import React from "react";
import SearchBar from "./Search/SearchBar";
import Welcome from "./Welcome/Welcome";
import MovieRow from "../movierow/MovieRow";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-searchcontainer">
        <Welcome />
        <SearchBar />
      </div>
      <MovieRow url="movies/top10/rated" title={"Top Rated"} />
      <MovieRow url="movies/top10/popular" title={"Popular"} />
    </div>
  );
};

export default Home;
