export const fetchWithTimeout = (delay) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const fetchMovies = () => {
  const resolveFunction = () => movies;
  fetchWithTimeout(1000).then(fetchWithTimeout(resolveFunction));
};

export const fetchBooks = () => {
  return fetch("./data/books.json")
    .then((response) => response.json())
    .then((books) => books)
    .catch((error) => console.log(error));
};

moviePromise = fetchMovies();

moviePromise.then((result) => console.log(result));
