import React from "react";

const types = [
  { label: "All", value: "" },
  { label: "Movie", value: "movie" },
  { label: "Series", value: "series" },
  { label: "Episode", value: "episode" },
];

const DropdownFilter = ({ filter, onChange }) => (
  <select
    className="border px-2 py-2 rounded"
    value={filter}
    onChange={(e) => onChange(e.target.value)}
  >
    {types.map((t) => (
      <option key={t.value} value={t.value}>
        {t.label}
      </option>
    ))}
  </select>
);

export default DropdownFilter;
