import React from "react";
import Wrapper from "../assets/wrappers/Search";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <Wrapper>
      <div className="input-container">
        <span className="icon">
          <CiSearch />
        </span>
        <input type="text" className="search" placeholder="Search" />
      </div>
    </Wrapper>
  );
};

export default Search;
