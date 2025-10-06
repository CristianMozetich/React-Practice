import Image from "next/image";


export function ListOfMovies ({movies}) {

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <h2>{movie.title}</h2>
                    <Image src={movie.poster} alt={movie.title} width={200} height={300} />
                    <p>{movie.year}</p>
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

