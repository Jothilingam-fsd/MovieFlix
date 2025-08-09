// src/pages/MovieDetailsPage.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../api/omdb";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const { isFavorite, addFavorite, removeFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      const data = await fetchMovieDetails(imdbID);
      setMovie(data);
      setLoading(false);
    };
    getDetails();
  }, [imdbID]);

  if (loading) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-red-500 hover:underline mb-6 inline-block">← Back to results</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="w-full md:w-80 rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="mb-3 text-gray-300">{movie.Year} • {movie.Genre} • {movie.Runtime}</p>
          <p className="mb-3">{movie.Plot}</p>
          <p><span className="font-bold">Cast:</span> {movie.Actors}</p>
          <p><span className="font-bold">Director:</span> {movie.Director}</p>
          <div className="mt-4">
            <button
              className={`px-4 py-2 rounded ${
                isFavorite(movie.imdbID)
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-black"
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
      </div>
    </div>
  );
};

export default MovieDetailsPage;
