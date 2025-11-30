import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Services from "./Pages/ServicesPage";
import "./index.css";
import { wakeupBackend } from "./utils/wakeupBackend";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    wakeupBackend(API_URL);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}
export default App;
