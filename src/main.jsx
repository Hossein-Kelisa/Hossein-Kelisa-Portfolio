import { StrictMode } from "react";
import App from "./App.jsx";
import "./i18n.js";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
