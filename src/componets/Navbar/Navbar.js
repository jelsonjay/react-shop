import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="img" />
      <ul className="nav-link">
        <Link to="/" className="main-nav">
          <li className="nav-link active">Home</li>
        </Link>
        <Link to="/about" className="main-nav">
          <li className="nav-link">About</li>
        </Link>
        <Link to="/shop" className="main-nav">
          <li className="nav-link">Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
