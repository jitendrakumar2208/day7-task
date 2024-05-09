import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={logo} alt="" />
        <h2>GeekFoods</h2>
      </div>

      <div className="center">
        <a href="">Home</a>
        <a href="">Restaurent</a>
        <a href="">Quote</a>
        <a href="">Food</a>
        <a href="">Contact</a>
      </div>

      <div className="right">
        <button>Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
