import { createContext, useState } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      language: "English",
      price: 250
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Drama",
      language: "English",
      price: 300
    }
  ]);

  // ✅ Add Movie
  const addMovie = (movie) => {
    setMovies((prev) => [
      ...prev,
      {
        ...movie,
        id: Date.now()
      }
    ]);
  };

  // ✅ Update Movie (EDIT)
  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        addMovie,
        updateMovie
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
