import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default ThemeToggle;
