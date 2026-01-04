import { useContext, useState } from "react";
import { MoviesContext } from "../context/MoviesContext";
import MovieForm from "../components/MovieForm";

export default function Movies() {
  const { movies, addMovie, updateMovie } = useContext(MoviesContext);

  const [editingMovie, setEditingMovie] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSave = (movie) => {
    if (movie.id) {
      updateMovie(movie);   // ✅ EDIT
    } else {
      addMovie(movie);      // ✅ ADD
    }
    setShowForm(false);
    setEditingMovie(null);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Movies</h1>
        <button
          onClick={() => {
            setEditingMovie(null);
            setShowForm(true);
          }}
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add Movie
        </button>
      </div>

      {showForm && (
        <MovieForm
          initialData={editingMovie}
          onSubmit={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingMovie(null);
          }}
        />
      )}

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Title</th>
            <th>Genre</th>
            <th>Language</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id} className="border-t">
              <td className="p-2">{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.language}</td>
              <td>₹{movie.price}</td>
              <td>
                <button
                  onClick={() => {
                    setEditingMovie(movie);  // ✅ load data
                    setShowForm(true);       // ✅ open form
                  }}
                  className="text-indigo-600 font-medium"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
