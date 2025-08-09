// src/components/MovieCard.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <Link
          to={`/movie/${movie.imdbID}`}
          className="block font-bold text-lg truncate hover:text-red-500"
        >
          {movie.Title}
        </Link>
        <p className="text-sm text-gray-400">{movie.Year} • {movie.Type}</p>
        <button
          className={`mt-3 px-3 py-2 w-full text-sm font-semibold rounded ${
            isFavorite(movie.imdbID)
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
          onClick={() =>
            isFavorite(movie.imdbID)
              ? removeFavorite(movie.imdbID)
              : addFavorite(movie)
          }
        >
          {isFavorite(movie.imdbID) ? "Remove Favorite" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
