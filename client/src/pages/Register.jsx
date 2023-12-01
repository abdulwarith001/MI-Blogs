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
          Already a member?{" "}
          <Link to="/login" className="link">
            Login!
          </Link>
        </p>

        <div className="input-main-wrapper">
          <Input type="text" label="Name" placeholder="John Doe" />
          <Input type="email" label="E-mail" placeholder="john@test.com" />
          <Input type="password" label="Password" placeholder="*****" />
          <button className="btn">Register</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
