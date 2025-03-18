import React from "react";
import "../styles/Header.css"; // Import styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🚗 Vehicle Rental</div>
      <nav>
        <a href="New.html">Home</a>
        <a href="Vehicle.html">Search Vehicles</a>
        <a href="Contact.html">Contact Us</a>
        <a href="login.html">
          <button className="btn">Login</button>
        </a>
        <a href="register.html">
          <button className="btn">Sign Up</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
