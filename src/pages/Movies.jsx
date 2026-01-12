import { useState } from "react";
import { MOVIES } from "../data/movies";

import { FaRegTrashAlt } from "react-icons/fa";

function Movies() {
  const [movieList, setMovieList] = useState(MOVIES);
  const [editingID, setEditingID] = useState(null);
  const [tempTitle, setTempTitle] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [isAscending, setIsAscending] = useState(false);

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

  const sortedMovies = [...movieList].sort((a, b) => {
    let result = 0;
    if (sortBy === "alphabetical") {
      result = a.title.localeCompare(b.title);
    } else if (sortBy === "rating") {
      result = a.rating - b.rating;
    } else if (sortBy === "year") {
      result = a.year - b.year;
    }

    // Ha csökkenő sorrend kell, megfordítjuk az eredményt
    return isAscending ? result : -result;
  });

  return (
    <div>
      <div className="flex gap-4 mb-4 items-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="rating">Rating</option>
          <option value="year">Year</option>
        </select>

        <button
          onClick={() => setIsAscending(!isAscending)}
          className="p-2 bg-gray-200 rounded"
        >
          {isAscending ? "⬆️ Ascending" : "⬇️ Descending"}
        </button>
      </div>
      <ul>
        {sortedMovies.map((movie) => (
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
