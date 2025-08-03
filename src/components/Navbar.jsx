import React from 'react';
import './Navbar.css'; 

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Hossein.dev</div>
    <ul className="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
      <li><a href="#resume">Resume</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
