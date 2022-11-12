import React, { useState } from "react";
import logo from "../images/2022-11-03_195036.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [input, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("auth/sign-up", input);
      navigate("/login");
      //console.log(res);
    } catch (error) {
      setError(error.response.data);
      //console.log(error);
    }
  };
  //console.log(input);

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
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />

        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSignUp}>SignUp</button>
        {error && <p>{error}</p>}
        <span>
          bạn đã có tài khoản? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
