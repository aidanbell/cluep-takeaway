"use client";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { CloseIcon, SearchIcon } from "./Icons";

// interface SearchBarProps {
//   handleSearch: (query: string) => void;
//   query: string
// }

export default function SearchBar() {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(query: string) {
    setSearchQuery(query);
  }

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", query);
    if (!query) params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  }, 500);

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
        <>
        <input
          type="text"
          autoFocus
          className="relative w-full h-full bg-transparent pl-12 pr-4 border-none focus:outline-none text-white placeholder-white"
          onChange={(e) => handleSearch(e.target.value)} // Pass the search query
          onBlur={() => setIsActive(false)}
          defaultValue={searchParams.get("search") || ""}
          placeholder="Search..."
          />
          <CloseIcon
            size={24}
            className="absolute right-4 text-gray-300 hover:text-black cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        </>
      )}
    </div>
  );
}
