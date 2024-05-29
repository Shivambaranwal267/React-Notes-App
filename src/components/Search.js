import React from "react";
// import { BiSearchAlt2 } from "react-icons/bi";

export default function Search({ searchText, handleSearchText }) {
  return (
    <div className="search-box">
      {/* <BiSearchAlt2 /> */}
      <input
        value={searchText}
        onChange={(e) => handleSearchText(e.target.value)}
        type="text"
        placeholder="search notes..."
      />
    </div>
  );
}
