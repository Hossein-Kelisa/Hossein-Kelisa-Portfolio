import "./Learning.css";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaLanguage, FaGlobeEurope } from "react-icons/fa";
import Fades from "../Animations/Fades";
import { useTranslation } from "react-i18next";

const techLearning = [
  { name: "TypeScript", icon: <SiTypescript />, level: 1 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 1 },
];

const languageLearning = [
  { name: "English", icon: <FaGlobeEurope />, level: 3 },
  { name: "Dutch", icon: <FaLanguage />, level: 1 },
];

const Learning = () => {
  const { t } = useTranslation();

  const renderLearningCard = (item, index, category) => (
    <Fades animationType="fadeSlide" key={index}>
      <div className={`learning-card ${category}`} title={item.name}>
        <div className="learning-icon">{item.icon}</div>
        <div className="learning-level">
          {"★".repeat(item.level)}
          {"☆".repeat(5 - item.level)}
        </div>
        <div className="learning-name">{item.name}</div>
      </div>
    </Fades>
  );

  return (
    <section id="learning" className="learning-section">
      <Fades animationType="fadeZoom">
        <h2 className="learning-title">
          📚 {t("learning.title") || "Learning Now"}
        </h2>
      </Fades>

      {/* Tech Section */}
      <Fades animationType="fadeZoom">
        <h3 className="learning-subtitle tech">
          💻 {t("learning.tech") || "Tech"}
        </h3>
      </Fades>
      <div className="learning-grid">
        {techLearning.map((item, i) => renderLearningCard(item, i, "tech"))}
      </div>

      {/* Languages Section */}
      <Fades animationType="fadeZoom">
        <h3 className="learning-subtitle languages">
          🌍 {t("learning.languages") || "Languages"}
        </h3>
      </Fades>
      <div className="learning-grid">
        {languageLearning.map((item, i) =>
          renderLearningCard(item, i, "languages")
        )}
      </div>
    </section>
  );
};

export default Learning;
