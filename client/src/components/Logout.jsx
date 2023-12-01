import React, {useState} from "react";
import Wrapper from "../assets/wrappers/Logout.js";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className="logout-container">
        {/* <FaUserCircle className="user-icon" /> */}
        <button className="menu" onClick={() => setShowLogout(!showLogout)}>
          <p>Abdulwahab</p>

          {showLogout ? (
            <FaCaretUp className="caret-icon" />
          ) : (
            <FaCaretDown className="caret-icon" />
          )}
        </button>

        <div className={showLogout ? "dropdown" : "dropdown show-logout"}>
          <FiLogOut />
          <p>Logout</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Logout;
