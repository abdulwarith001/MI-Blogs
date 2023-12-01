import React, {useState} from "react";
import Wrapper from "../assets/wrappers/Navbar";
import Search from "./SearchBox";
import {FaAlignLeft } from "react-icons/fa";
import Logout from "./Logout";


const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav">

        <button type="button" className="toggle-btn">
          <FaAlignLeft />
        </button>
        
        <Search />
        <h4>Blog name</h4>
        <Logout/>
      </div>
    </Wrapper>
  );
};

export default Navbar;
