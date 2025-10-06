import { Movies } from "../components/Movies";
import { useMovie } from "../hooks/useMovies";



export default function Home() {
  const { movies: mappedMovies } = useMovie();
  return (
    <div className="flex flex-col items-center bg-cyan-950 text-amber-50 justify-center">
      <form className="flex" action="">
        <input className="m-2" type="text" placeholder="Busca tu pelicula" />
        <button className="m-2" type="submit">
          Buscar
        </button>
      </form>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}
