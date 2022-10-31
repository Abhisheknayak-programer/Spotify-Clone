import React from "react";
import "./Login.css";
import { loginUrl } from "../../assets/spotify";
import logo from "../../assets/images/logo.jpg";

const Login = () => {
  return (
    <div className="loginContainer">
      <img src={logo} alt="spotify logo" />
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
};

export default Login;
