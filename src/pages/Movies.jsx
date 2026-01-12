import { useState } from "react";
import { MOVIES } from "../data/movies";

function Movies() {
  const [movieList, setMovieList] = useState(MOVIES);

  return (
    <div>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button></button>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
