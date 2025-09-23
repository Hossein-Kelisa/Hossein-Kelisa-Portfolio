import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
