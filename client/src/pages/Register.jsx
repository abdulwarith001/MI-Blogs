import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/LoginRegister";
import { Logo, Input } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/userApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import Loader from "../components/Loading";

const Register = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [data, setData] = useState({
    email: "",
    name: "",
    blogName: '',
    password: "",
  });

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
      const res = await register(data).unwrap();
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
      {isLoading && <Loader text="creating your account..." />}
      <div className="shadow"></div>
      <div className="content">
        <Logo />
        <p>
          Already a member?{" "}
          <Link to="/login" className="link">
            Login!
          </Link>
        </p>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        <div className="input-main-wrapper">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Name"
              placeholder="John Doe"
              value={data.name}
              name="name"
              onChange={handleChange}
            />
            <Input
              type="email"
              label="E-mail"
              placeholder="john@test.com"
              value={data.email}
              name="email"
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Name of Blog"
              placeholder="Preferred blog name"
              value={data.blogName}
              name="blogName"
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
            <button className="btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
