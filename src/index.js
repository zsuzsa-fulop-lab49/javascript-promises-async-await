const fetchWithTimeout = require("./services/fetchWithTimeout");
const fetchMovies = require("./services/fetchMovies");
const fetchBooks = require("./services/fetchBooks");
const movies = require("./services/movies.json");

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
