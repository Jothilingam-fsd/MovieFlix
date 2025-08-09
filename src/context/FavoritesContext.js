import React, { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const localFavs = localStorage.getItem("favorites");
    if (localFavs) setFavorites(JSON.parse(localFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => setFavorites([...favorites, movie]);
  const removeFavorite = (id) =>
    setFavorites(favorites.filter((fav) => fav.imdbID !== id));
  const isFavorite = (id) => favorites.some((fav) => fav.imdbID === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
