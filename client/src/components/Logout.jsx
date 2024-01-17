import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Logout.js";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { clearCredentials } from "../slices/authSlice.js";
import { useDispatch } from "react-redux";

const Logout = ({ name }) => {
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearCredentials())
  };

  return (
    <Wrapper>
      <div className="logout-container">
        {/* <FaUserCircle className="user-icon" /> */}
        <div className="menu" onClick={() => setShowLogout(!showLogout)}>
          <p>Hi, {name}</p>

          {showLogout ? (
            <FaCaretUp className="caret-icon" />
          ) : (
            <FaCaretDown className="caret-icon" />
          )}
        </div>

        <button className={showLogout ? "dropdown" : "dropdown show-logout"} onClick={handleLogout}>
          <FiLogOut />
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

export default Logout;
