import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/logo.png";
import Fades from "../Animations/Fades";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Fades animationType="fadeDown">
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-left">
        <a href="/">
          <img src={logo} alt="My Logo" className="logo" />
        </a>
      </div>

      <button
        className="mobile-menu-icon"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation"
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        {["about", "projects", "certificates", "resume", "contact"].map(
          (section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={handleLinkClick}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
    </Fades>
  );
};

export default Navbar;
