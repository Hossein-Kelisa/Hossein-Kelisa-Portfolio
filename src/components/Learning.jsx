import "./Learning.css";
import {
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaLanguage, FaGlobeEurope } from "react-icons/fa";
import Fades from "../Animations/Fades";
import { useTranslation } from "react-i18next";

const techLearning = [
  { name: "TypeScript", icon: <SiTypescript />, level: 2 }, 
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 3 },
];

const languageLearning = [
  { name: "English", icon: <FaGlobeEurope />, level: 4 },
  { name: "Dutch", icon: <FaLanguage />, level: 2 },
];

const Learning = () => {
  const { t } = useTranslation();

  const renderLearningCard = (item, index) => (
    <Fades animationType="fadeSlide" key={index}>
      <div className="learning-card" title={item.name}>
        <div className="learning-icon">{item.icon}</div>
        <div className="learning-level">
          {"📖".repeat(item.level)}
          {"▫️".repeat(5 - item.level)}
        </div>
        <div className="learning-name">{item.name}</div>
      </div>
    </Fades>
  );

  return (
    <section id="learning" className="learning-section">
      <Fades animationType="fadeZoom">
        <h2 className="learning-title">📚 {t("learning.title") || "Learning Now"}</h2>
      </Fades>

      <Fades animationType="fadeZoom">
        <h3 className="learning-subtitle">💻 {t("learning.tech") || "Tech"}</h3>
      </Fades>
      <div className="learning-grid">{techLearning.map(renderLearningCard)}</div>

      <Fades animationType="fadeZoom">
        <h3 className="learning-subtitle">🌍 {t("learning.languages") || "Languages"}</h3>
      </Fades>
      <div className="learning-grid">{languageLearning.map(renderLearningCard)}</div>
    </section>
  );
};

export default Learning;
