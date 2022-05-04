const movies = require("./services/movies.json");
import { fetchWithTimeout } from "./services";
const fetchMovies = require("./services/fetchMovies");
const fetchBooks = require("./services/fetchBooks");

export const fetchMovies = () => {
  const resolveFunction = () => movies;
  fetchWithTimeout(1000).then(fetchWithTimeout(resolveFunction));
};

moviePromise = fetchMovies();

moviePromise.then((result) => console.log(result));

const getBooksAndMovies = () => {
  return Promise.all([fetchBooks(), fetchMovies()])
    .then(([books, movies]) => ({
      books,
      movies,
    }))
    .catch((error) => console.log("Error fetching books and movies", error));
};
const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise.then((results) =>
  console.log("getBooksAndMoviesPromise", results)
);
