import responseMovies from "../mocks/movies.json";
export function useMovie() {
  const movie = responseMovies.Search;
  const mappedMovies = movie.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}