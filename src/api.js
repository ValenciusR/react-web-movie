import axios from "axios";

export async function getMovieList() {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
  );
  return movie.data.results;
}

export async function searchMovie(q) {
  const search = await axios.get(q);
  return;
}
