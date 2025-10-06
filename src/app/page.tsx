"use client";
import { Movies } from "../components/Movies";
import { useMovie } from "../hooks/useMovies";
import { useRef } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  }

  const { movies: mappedMovies } = useMovie();
  return (
    <div className="flex flex-col items-center bg-cyan-950 text-amber-50 justify-center">
      <form className="flex" action="">
        <input ref={inputRef} className="m-2" type="text" placeholder="Busca tu pelicula" />
        <button onClick={handleSubmit} className="m-2" type="submit">
          Buscar
        </button>
      </form>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}
