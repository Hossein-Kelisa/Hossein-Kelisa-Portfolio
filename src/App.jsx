import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Layout />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
