import "./Navbar.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    "about",
    "profile",
    "contact",
  ];

  return (
    <Fades animationType="fadeUp">
      <nav className="navbar-container">
        <ul className="nav-links">
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
