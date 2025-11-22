import "./Hero.css";
import { Waves } from "./Waves";
import Navbar from "./Navbar";
import ToggleLanguages from "../ToggleLanguages";
import ThemeToggle from "../ThemeToggle";
import Welcome from "./Welcome";
import Fades from "../../Animations/Fades";

const Hero = () => {
  return (
    <div className="hero-container">
      <Waves />
      <ToggleLanguages />
      <ThemeToggle />

      <div className="hero-navbar-wrapper">
        <Navbar />
      </div>

      <Welcome />

      <div className="explore-button-wrapper">
        <Fades animationType="fadeZoom">
          <a className="explore-button">Explore My Services</a>
          {/* <a href="/services" className="explore-button">
            Explore My Services
          </a> */}
        </Fades>
      </div>
    </div>
  );
};

export default Hero;
