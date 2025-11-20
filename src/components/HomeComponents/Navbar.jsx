import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/logo.png";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    "about",
    "projects",
    "certificates",
    "skills",
    "resume",
    "contact",
  ];

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

        <ul
          ref={menuRef}
          className={`nav-links ${isMobileMenuOpen ? "open" : "closed"}`}
        >
          {sections.map((section) => (
            <li key={section}>
              <button
                className="nav-button"
                onClick={() => handleLinkClick(section)}
              >
                {t(`navbar.${section}`)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </Fades>
  );
};

export default Navbar;
