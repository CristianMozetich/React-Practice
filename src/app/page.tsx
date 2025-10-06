import { Movies } from "../components/Movies";
import movies from "../mocks/movies.json";



export default function Home() {

  return (
    <div className="flex flex-col items-center bg-cyan-950 text-amber-50 justify-center">
      <form className="flex" action="">
        <input className="m-2" type="text" placeholder="Busca tu pelicula" />
        <button className="m-2" type="submit">Buscar</button>
      </form>
      <main>
        <Movies movies={movies.Search}/>
      </main>
    </div>
  );
}
