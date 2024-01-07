import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/LoginRegister";
import { Logo, Input } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/userApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import Loader from "../components/Loading";

const Login = () => {
  const [login, {isLoading}] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errorMsg, setErrorMsg] = useState('')
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const { userInfo } = useSelector((state) => state.auth);

   useEffect(() => {
     if (userInfo) {
       navigate("/dashboard");
     }
   }, [navigate, userInfo]);

   useEffect(() => {
     const timeoutId = setTimeout(() => {
       setErrorMsg("");
     }, 7000);

     return () => {
       clearTimeout(timeoutId);
     };
   }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(data).unwrap();
      dispatch(setCredentials({ ...res }));
      if (userInfo) {
        navigate("/dashboard");
      }
    } catch (error) {
      setErrorMsg(error?.data?.message || error.error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      {isLoading && <Loader text="Logging in..." />}
      <div className="shadow"></div>
      <div className="content">
        <Logo />
        <p>
          Not a member?{" "}
          <Link to="/register" className="link">
            Create account!
          </Link>
        </p>

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        <div className="input-main-wrapper">
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              label="E-mail"
              placeholder="john@test.com"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
            <Input
              type="password"
              label="Password"
              placeholder="*****"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <button className="btn">Login</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
