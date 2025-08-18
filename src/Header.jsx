import React, { useState } from "react";
import logo from "../images/logo.png";
import "./Header.css";


const Header = () => {
  
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <h3 className="logo-text">Chef Claude</h3>
    </div>
  );
};

export default Header;

