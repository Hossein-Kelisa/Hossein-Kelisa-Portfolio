import "./Hero.css";
import { Waves } from "./Waves";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Fades from "../../Animations/Fades";
import { useTranslation } from "../../../node_modules/react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero-container">
      <Waves />
      <div className="hero-navbar-wrapper">
        <Navbar />
      </div>
      <Welcome />
      <div className="explore-button-wrapper">
        <Fades animationType="fadeZoom">
          <a href="/services" className="explore-button">
            {t("hero.viewWork")}
          </a>
        </Fades>
      </div>
    </div>
  );
};

export default Hero;
