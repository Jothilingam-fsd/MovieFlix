// src/components/Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex gap-2 mt-8 justify-center">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
    >
      Prev
    </button>
    {[...Array(totalPages).keys()].map((_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`px-4 py-2 rounded ${
          currentPage === i + 1
            ? "bg-red-600 text-white"
            : "bg-gray-700 hover:bg-gray-600"
        }`}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
    >
      Next
    </button>
  </div>
);

export default Pagination;
