import Image from "next/image";


export function ListOfMovies ({movies}) {

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.imdbID}>
                    <h2>{movie.Title}</h2>
                    <Image src={movie.Poster} alt={movie.Title} width={200} height={300} />
                    <p>{movie.Year}</p>
                </li>
            ))}
        </ul>
    );
    
}

export function NotFound () {
    return (
        <h1>movie not found</h1>
    );
}   

export function Movies ({movies}) {
  const hasMovies = movies.length > 0
    return (
        hasMovies
        ? <ListOfMovies movies={movies} />
        : <NotFound />
    )
}

