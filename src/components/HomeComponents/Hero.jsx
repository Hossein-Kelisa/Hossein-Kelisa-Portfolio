import "./Hero.css";
import { Waves } from "./Waves";
import Navbar from "./Navbar";
import ToggleLanguages from "../ToggleLanguages";
import ThemeToggle from "../ThemeToggle";
import Welcome from "./Welcome";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

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
          <a className="explore-button">{t("hero.viewWork")}</a>
          {/* <a href="/services" className="explore-button">
            {t("hero.viewWork")}
          </a> */}
        </Fades>
      </div>
    </div>
  );
};

export default Hero;
