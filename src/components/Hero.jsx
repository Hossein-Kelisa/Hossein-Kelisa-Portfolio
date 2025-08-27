import "./Hero.css";
import Fades from "../Animations/Fades"; 

const Hero = () => (
  <section className="hero-section">
    <Fades animationType="fadeZoom">
    <h1 className="hero-title">
      Hi there, I'm <span>Hossein</span>
    </h1>
    </Fades>
    <p className="hero-subtitle">
      A passionate web developer building responsive and user-friendly websites.
    </p>
    <Fades animationType="fadeZoom">
    <a href="#projects" className="hero-button">
      View My Work
    </a>
    </Fades>
  </section>
);

export default Hero;
