import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./ThemeToggle.css";
import Fades from "../Animations/Fades";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle-container">
      <Fades animationType="fadeOnly">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </Fades>
    </div>
  );
}

export default ThemeToggle;
