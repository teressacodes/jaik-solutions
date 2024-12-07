import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/jaik-solutions-logo.png";

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-logo">
          <Link to="/">
            <img src={logo} alt="JAIK Solutions Logo" />
          </Link>
        </div>
        <div className="footer-section site-map">
          <div className="quick-links-header">
            <h4 className={isQuickLinksOpen ? "hide" : ""}>Quick Links</h4>
            <button
              className="hamburger"
              onClick={toggleQuickLinks}
              aria-label="Toggle Quick Links"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
          <ul className={`quick-links ${isQuickLinksOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Phone: +1-888-777-3664</p>
          <p>
            Email:{" "}
            <a href="mailto:support@jaiksolutions.com">
              support@jaiksolutions.com
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 JAIK Solutions Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
