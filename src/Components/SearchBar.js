import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ searchInput, inputTrack }) {
  const [input, setInput] = useState("");

  return (
    <div className="searchBar">
      <SearchIcon />
      <input
        value={searchInput}
        type="text"
        onChange={(e) => inputTrack(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
