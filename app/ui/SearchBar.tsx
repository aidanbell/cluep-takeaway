"use client";

import { useState } from "react";
import { SearchIcon } from "./Icons";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target?.value;
    setSearch(val);
  };

  return (
    <div className="relative w-full h-12 my-4 flex items-center">
      {/* Search bar background container */}
      <div
        className={`absolute h-full w-full origin-right transition-transform duration-500 ease-in-out rounded-full bg-gray-300 ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}></div>

      {/* Search icon */}
      <div
        className={`search-icon absolute transition-transform transition-color duration-500 ease-in-out -right-14 ${
          isActive ? "transform open" : "transform translate-x-0"
        } text-gray-300 hover:text-black cursor-pointer`}
        onClick={() => setIsActive(!isActive)}>
        <SearchIcon
          size={32}
          className={isActive ? "text-gray-500" : "text-gray-300"}
        />
      </div>

      {/* Input field, only visible when active */}
      {isActive && (
        <input
          type="text"
          autoFocus
          className="relative w-full h-full bg-transparent pl-12 pr-4 border-none focus:outline-none text-white placeholder-white"
          onChange={handleChange}
          onBlur={() => setIsActive(false)}
          value={search}
          placeholder="Search..."
        />
      )}
    </div>
  );
}
