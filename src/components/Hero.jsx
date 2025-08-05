import React from "react";
import "./Hero.css";

const Hero = () => (
  <section className="hero-section">
    <h1 className="hero-title">
      Hi there, I'm <span>Hossein</span>
    </h1>
    <p className="hero-subtitle">
      A passionate web developer building responsive and user-friendly websites.
    </p>
    <a href="#projects" className="hero-button">
      View My Work
    </a>
  </section>
);

export default Hero;
