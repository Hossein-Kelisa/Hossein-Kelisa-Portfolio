import "./ToggleLanguages.css";
import { useTranslation } from "react-i18next";
import Fades from "../Animations/Fades";

const ToggleLanguages = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    }
  };

  return (
    <div className="toggle-languages-container">
      <Fades animationType="fadeRotate">
      {["en", "fa", "du"].map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`lang-btn ${i18n.language === lang ? "active" : ""}`}
          aria-label={`Switch to ${lang === "en" ? "English" : lang === "fa" ? "Farsi" : "Dutch"}`}
          title={`Switch to ${lang === "en" ? "English" : lang === "fa" ? "Farsi" : "Dutch"}`}
        >
          <img
            src={`Flags/${lang.toUpperCase()}.png`}
            alt={`${lang === "en" ? "English" : lang === "fa" ? "Farsi" : "Dutch"} flag`}
            className="flag-icon"
          />
        </button>
      ))}
      </Fades>
    </div>
  );
};

export default ToggleLanguages;
