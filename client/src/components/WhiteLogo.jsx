import React from "react";
import logo from "../assets/images/logo2.svg";
import Wrapper from "../assets/wrappers/Logo";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/" className="logo-container">
        <img src={logo} alt="mi-blogs logo" />
        <p>MI Blogs</p>
      </Link>
    </Wrapper>
  );
};

export default Logo;
