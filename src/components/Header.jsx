// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-30">
      <h1 className="text-xl font-bold tracking-wide">🎬 MovieFlix</h1>
      <div className="flex items-center gap-6">
        <span className="cursor-pointer hover:text-red-500 transition">🔍</span>
        <div className="cursor-pointer relative">
          ❤️
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
            0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
