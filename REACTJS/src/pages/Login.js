import React, { useState, useContext } from "react";
import logo from "../images/2022-11-03_195036.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/userContext.js";

const Login = () => {
  const [input, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
  };

  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      //await axios.post("auth/login", input);
      navigate("/");
      //console.log(res);
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };
  return (
    <div className="login">
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSignUp}>Login</button>
        {error && <p>{error}</p>}
        <span>
          bạn chưa có tài khoản? <Link to="/sign-up">Đăng ký</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
