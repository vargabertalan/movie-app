import { useState } from "react";
import { MOVIES } from "../data/movies";

import { FaRegTrashAlt } from "react-icons/fa";

function Movies() {
  const [movieList, setMovieList] = useState(MOVIES);
  const [editingID, setEditingID] = useState(null);
  const [tempTitle, setTempTitle] = useState("");

  function handleRemove(id) {
    setMovieList(movieList.filter((movie) => movie.id !== id));
  }

  function handleSave(id) {
    const updatedList = movieList.map((movie) =>
      movie.id === id ? { ...movie, title: tempTitle } : movie
    );
    setMovieList(updatedList);
    setEditingID(null);
  }

  return (
    <div>
      <ul>
        {movieList.map((movie) => (
          <li
            key={movie.id}
            className={editingID === movie.id ? "bg-yellow-100" : ""}
          >
            {editingID !== movie.id && <span>{movie.title}</span>}

            {editingID === movie.id ? (
              <div>
                <input
                  type="text"
                  value={tempTitle}
                  onChange={(e) => setTempTitle(e.target.value)}
                />
                <button
                  disabled={tempTitle.trim() === ""}
                  onClick={() => handleSave(movie.id)}
                >
                  Save
                </button>
                <button onClick={() => setEditingID(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <button onClick={() => handleRemove(movie.id)}>
                  <FaRegTrashAlt />
                </button>
                <button
                  onClick={() => {
                    setEditingID(movie.id);
                    setTempTitle(movie.title);
                  }}
                >
                  Szerkesztés
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
