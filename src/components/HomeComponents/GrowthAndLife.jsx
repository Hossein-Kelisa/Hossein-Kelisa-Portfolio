import "./GrowthAndLife.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaAws, FaShieldAlt, FaPalette } from "react-icons/fa";

const GrowthAndLife = () => {
  const { t } = useTranslation();
  const techLearning = [
    {
      name: t("growth-life.Learning.typescript"),
      icon: <SiTypescript />,
      level: 1,
    },
    {
      name: t("growth-life.Learning.tailwindcss"),
      icon: <SiTailwindcss />,
      level: 4,
    },
    { name: t("growth-life.Learning.aws"), icon: <FaAws />, level: 1 },
    {
      name: t("growth-life.Learning.webSecurity"),
      icon: <FaShieldAlt />,
      level: 1,
    },
    {
      name: t("growth-life.Learning.uiDesign"),
      icon: <FaPalette />,
      level: 3,
    },
  ];

  const hobbies = [
    { icon: "🏋️‍♂️", title: t("growth-life.hobbies.gym") },
    { icon: "🏇", title: t("growth-life.hobbies.horseRiding") },
    { icon: "🎵", title: t("growth-life.hobbies.listeningToMusic") },
    { icon: "📸", title: t("growth-life.hobbies.photography") },
  ];

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
      <h3 className="gl-subtitle">{t("growth-life.hobby")}</h3>

      <div className="gl-grid">
        {hobbies.map((item, i) => renderCard(item, i, "hobby"))}
      </div>
      <Fades animationType="fadeSlide">
        <div className="collaborate-note">
          {t("growth-life.collaborateNote")}
        </div>
      </Fades>
    </section>
  );
};

export default GrowthAndLife;
