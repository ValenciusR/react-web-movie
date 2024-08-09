import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Finder</h1>
        <input
          value={search}
          className="Movie-search"
          placeholder="cari film"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Contoh pertama</div>
            <img className="Movie-image" src=""></img>
            <div className="Movie-date">11-12-2022</div>
            <div className="Movie-rate">8.9</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
