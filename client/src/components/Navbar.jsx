import React, {useState} from "react";
import Wrapper from "../assets/wrappers/Navbar";
import Search from "./SearchBox";
import {FaAlignLeft } from "react-icons/fa";
import Logout from "./Logout";
import { useDashboardContext } from "../pages/DashboardLayout";



const Navbar = () => {
    const { toggleSidebar, user } = useDashboardContext();
    // console.log(user)

  return (
    <Wrapper>
      <div className="nav">
        <button
          type="button"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>

        <Search />
        <h4>{user.blogName}'s blog</h4>
        <Logout name={ user.name} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
