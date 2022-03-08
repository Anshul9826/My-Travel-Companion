import React from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className="searchBar rounded-pill">
      <SearchIcon
        className="searchIcon"
        fontSize="large"
        style={{ color: "green" }}
      />
      <input type="search" aria-label="Search" />
    </div>
  );
}

export default SearchBar;