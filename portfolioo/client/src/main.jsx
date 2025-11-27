import { StrictMode } from "react";
import App from "./App.jsx";
import "./i18n.js";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./components/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
