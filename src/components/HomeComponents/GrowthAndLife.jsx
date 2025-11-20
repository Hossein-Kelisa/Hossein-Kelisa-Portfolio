import "./GrowthAndLife.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";
import {
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaAws,
  FaShieldAlt,
  FaPalette,
  FaLanguage,
  FaGlobeEurope,
} from "react-icons/fa";

const techLearning = [
  { name: "TypeScript", icon: <SiTypescript />, level: 1 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 1 },
  { name: "AWS", icon: <FaAws />, level: 1 },
  { name: "Web Security", icon: <FaShieldAlt />, level: 1 },
  { name: "UI Design", icon: <FaPalette />, level: 1 },
];

const languageLearning = [
  { name: "English", icon: <FaGlobeEurope />, level: 3 },
  { name: "Dutch", icon: <FaLanguage />, level: 1 },
];

const hobbies = [
  { icon: "📚", title: "Learning English & Dutch" },
  { icon: "💻", title: "Coding New Projects" },
  { icon: "🚶‍♂️", title: "Going for Walks" },
  { icon: "🏇", title: "Horse Riding" },
  { icon: "☕", title: "Coffee" },
  { icon: "🎵", title: "Listening to Music" },
  { icon: "🏋️‍♂️", title: "Gym" },
];

const GrowthAndLife = () => {
  const { t } = useTranslation();

  const renderCard = (item, index, type) => (
    <Fades animationType="fadeSlide" key={index}>
      <div className={`gl-card ${type}`}>
        <div className="gl-icon">{item.icon}</div>

        {item.level && (
          <div className="gl-level">
            {"★".repeat(item.level)}
            {"☆".repeat(5 - item.level)}
          </div>
        )}

        <div className="gl-name">{item.name || item.title}</div>
      </div>
    </Fades>
  );

  return (
    <section id="growth-life" className="gl-section">
      <Fades animationType="fadeZoom">
        <h2 className="gl-title">✨ {t("learning.growthLife") || "Growth & Life"}</h2>
      </Fades>

      {/* Learning Section */}
      <h3 className="gl-subtitle">📚 {t("learning.title") || "Learning Now"}</h3>

      <h4 className="gl-category">💻 Tech</h4>
      <div className="gl-grid">
        {techLearning.map((item, i) => renderCard(item, i, "tech"))}
      </div>

      <h4 className="gl-category">🌍 Languages</h4>
      <div className="gl-grid">
        {languageLearning.map((item, i) =>
          renderCard(item, i, "languages")
        )}
      </div>

      {/* Hobbies Section */}
      <h3 className="gl-subtitle">❤️ {t("hobbies.title") || "Beyond Coding"}</h3>

      <div className="gl-grid">
        {hobbies.map((item, i) => renderCard(item, i, "hobby"))}
      </div>
    </section>
  );
};

export default GrowthAndLife;
