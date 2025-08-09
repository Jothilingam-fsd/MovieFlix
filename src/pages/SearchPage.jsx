// src/pages/SearchPage.jsx
import React, { useState } from "react";
import { fetchMovies } from "../api/omdb";
import Header from "../components/Header";
import SearchControls from "../components/SearchControls";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [results, setResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (page = 1) => {
    setLoading(true);
    const data = await fetchMovies(search, page, type);
    setResults(data.Search || []);
    setTotalResults(parseInt(data.totalResults) || 0);
    setCurrentPage(page);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="text-center mt-12">
        <h2 className="text-4xl md:text-5xl font-bold">Discover Amazing Movies</h2>
        <p className="mt-3 text-gray-300">Search through millions of movies and TV shows</p>
      </div>
      <SearchControls
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        year={year}
        setYear={setYear}
        onSearch={handleSearch}
      />

      <div className="container mx-auto mt-10 px-6 pb-10">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="grid gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {results.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
            {totalResults > 10 && (
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(totalResults / 10)}
                onPageChange={handleSearch}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
