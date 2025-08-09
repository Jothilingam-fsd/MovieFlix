// src/components/SearchControls.jsx
import React from "react";
import DropdownFilter from "./DropdownFilter";

const SearchControls = ({ search, setSearch, type, setType, year, setYear, onSearch }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
      <input
        type="text"
        placeholder="Search for movies, TV shows..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 rounded-md text-black w-80 focus:outline-none"
      />
      <DropdownFilter filter={type} onChange={setType} />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="px-4 py-2 rounded-md w-24 text-black focus:outline-none"
      />
      <button
        className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md font-semibold"
        onClick={() => onSearch(1)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchControls;
