import React from "react";
import logo from "../images/2022-11-03_231331.png";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="" />
      <span>
        Made with <b>React.js.</b>
        <br />
        Design logo with <b>Canva.com</b>
      </span>
    </footer>
  );
};

export default Footer;
