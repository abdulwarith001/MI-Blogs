import React from "react";
import Wrapper from "../assets/wrappers/LoginRegister";
import abstract from "../assets/images/abs.svg";
import { Logo, Input } from "../components";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <div className="shadow"></div>
      <div className="content">
        <Logo />
        <p>
          Not a member?{" "}
          <Link to="/register" className="link">
            Create account!
          </Link>
        </p>

        <div className="input-main-wrapper">
          <Input type="email" label="E-mail" placeholder="john@test.com" />
          <Input type="password" label="Password" placeholder="*****" />
          <button className="btn">Login</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
