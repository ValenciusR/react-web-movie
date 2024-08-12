import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      console.log({ query: query });
      setPopularMovies(query);
    }
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          ></img>
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}9</div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Finder</h1>
        <input
          className="Movie-search"
          placeholder="cari film"
          onChange={({ target }) => search(target.value)}
        ></input>
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
