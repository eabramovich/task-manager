import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import "./Logo.scss";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Логотип" />
    </a>
  )
}

export default Logo;