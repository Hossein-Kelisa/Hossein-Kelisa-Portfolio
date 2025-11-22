import "./GrowthAndLife.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaAws, FaShieldAlt, FaPalette } from "react-icons/fa";

const techLearning = [
  { name: "TypeScript", icon: <SiTypescript />, level: 1 },
  { name: "TailwindCSS", icon: <SiTailwindcss />, level: 1 },
  { name: "AWS", icon: <FaAws />, level: 1 },
  { name: "Web Security", icon: <FaShieldAlt />, level: 1 },
  { name: "UI Design", icon: <FaPalette />, level: 1 },
];

const hobbies = [
  { icon: "🏋️‍♂️", title: "Gym" },
  { icon: "🏇", title: "Horse Riding" },
  { icon: "🎵", title: "Listening to Music" },
  { icon: "📸", title: "Photography" },
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
        <h2 className="gl-title">{t("growth-life.title")}</h2>
      </Fades>

      {/* Learning Section */}
      <h3 className="gl-subtitle">{t("growth-life.learningNow")}</h3>

      <div className="gl-grid">
        {techLearning.map((item, i) => renderCard(item, i, "tech"))}
      </div>

      {/* Hobbies Section */}
      <h3 className="gl-subtitle">{t("growth-life.hobbies")}</h3>

      <div className="gl-grid">
        {hobbies.map((item, i) => renderCard(item, i, "hobby"))}
      </div>
      <div className="collaborate-note">{t("growth-life.collaborateNote")}</div>
    </section>
  );
};

export default GrowthAndLife;
