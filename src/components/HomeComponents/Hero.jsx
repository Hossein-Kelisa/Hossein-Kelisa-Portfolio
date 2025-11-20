import "./Hero.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <Fades animationType="fadeZoom">
        <h1 className="hero-title">
          {t("hero.homeGreeting", { name: "Hossein" })}
        </h1>
      </Fades>

      <p className="hero-subtitle">{t("hero.homeSubtitle1")}</p>
      <p className="hero-subtitle">{t("hero.homeSubtitle2")}</p>

      <Fades animationType="fadeZoom">
        <a href="/services" className="hero-button">
          {t("hero.goToServices")}
        </a>
      </Fades>
    </section>
  );
};

export default Hero;
