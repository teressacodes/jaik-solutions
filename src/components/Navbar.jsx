import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/jaik-solutions-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="JAIK Solutions Logo" className="logo" />
        </Link>
      </div>

      {/* Hamburger menu button */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navbar links */}
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="navbar-link">
            About Us
          </a>
        </li>
        <li>
          <a href="/pricing" className="navbar-link">
            Pricing
          </a>
        </li>
        <li>
          <a href="/team" className="navbar-link">
            Team
          </a>
        </li>
        <li>
          <a href="/contact" className="navbar-link">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
