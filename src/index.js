const movies = require("./data/movies.json");
import { fetchWithTimeout } from "./services";

export const fetchMovies = () => {
  const resolveFunction = () => movies;
  fetchWithTimeout(1000).then(fetchWithTimeout(resolveFunction));
};

moviePromise = fetchMovies();

moviePromise.then((result) => console.log(result));
