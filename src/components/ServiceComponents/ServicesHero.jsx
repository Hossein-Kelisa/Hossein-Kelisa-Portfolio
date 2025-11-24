import "./ServicesHero.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";

const ServicesHero = () => {
  const { t } = useTranslation();

  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services-hero-section">
      <Fades animationType="fadeZoom">
        <div className="services-hero-overlay">
          <h1 className="services-hero-title">{t("services.title")}</h1>
          <p className="services-hero-subtitle">{t("services.subtitle")}</p>

          <div className="services-hero-buttons">
            <button className="services-hero-btn primary" onClick={() => handleLinkClick("requirements")}>
              {t("services.requirements")}
            </button>
            <button className="services-hero-btn secondary" onClick={() => handleLinkClick("skills")}>
              {t("services.skills")}
            </button>
            <button className="services-hero-btn secondary" onClick={() => handleLinkClick("projects")}>
              {t("services.projects")}
            </button>
          </div>
        </div>
        <div className="Back-to-Portfolio-button-container">
          <a className="Back-to-Portfolio-button" href="/">
            {t("services.backToPortfolio")}
          </a>
        </div>
      </Fades>
    </section>
  );
};

export default ServicesHero;
