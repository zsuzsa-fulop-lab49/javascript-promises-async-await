import { fetchWithTimeout } from "./services";
const movies = require("./data/movies.json");

export const fetchMovies = () => {
  const resolveFunction = () => movies;
  return fetchWithTimeout(1000).then(fetchWithTimeout(resolveFunction));
};

const moviePromise = fetchMovies();

moviePromise.then((result) => console.log(result));
