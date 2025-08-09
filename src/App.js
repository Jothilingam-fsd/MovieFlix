import React from "react";
import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import SearchPage from "./pages/SearchPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import './index.css';


function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movie/:imdbID" element={<MovieDetailsPage />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
