import "./ServicesHero.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";

const ServicesHero = () => {
  const { t } = useTranslation();

  return (
    <section className="services-hero-section">
      <Fades animationType="fadeZoom">
        <div className="services-hero-overlay">
          <h1 className="services-hero-title">{t("services.title")}</h1>
          <p className="services-hero-subtitle">{t("services.subtitle")}</p>

          <div className="services-hero-buttons">
            <button className="services-hero-btn primary">
              {t("services.requirements")}
            </button>
            <button className="services-hero-btn secondary">
              {t("services.skills")}
            </button>
            <button className="services-hero-btn secondary">
              {t("services.projects")}
            </button>
          </div>
        </div>
        <div className="Back-to-Portfolio-button-container">
          <button className="Back-to-Portfolio-button">
            {t("services.backToPortfolio")}
          </button>
        </div>
      </Fades>
    </section>
  );
};

export default ServicesHero;
