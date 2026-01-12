import { useState } from "react";
import { MOVIES } from "../data/movies";

import { FaRegTrashAlt } from "react-icons/fa";

function Movies() {
  const [movieList, setMovieList] = useState(MOVIES);

  function handleRemove(id) {
    setMovieList(movieList.filter((movie) => movie.id !== id));
  }

  return (
    <div>
      <ul>
        {movieList.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => handleRemove(movie.id)}>
              <FaRegTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
