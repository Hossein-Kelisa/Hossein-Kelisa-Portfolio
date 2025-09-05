import "./Skills.css";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaFigma,
  FaCodepen,
  FaJira,
  FaServer,
  FaTools,
  FaCloud,
  FaFileCode,
} from "react-icons/fa";
import Fades from "../Animations/Fades";
import { useTranslation } from "react-i18next";

const languages = [
  { name: "JavaScript", icon: <FaJs />, level: 5 },
  { name: "React", icon: <FaReact />, level: 5 },
  { name: "HTML5", icon: <FaHtml5 />, level: 5 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 5 },
  { name: "Jest", icon: <FaFileCode />, level: 4 }, 
  { name: "REST API", icon: <FaCloud />, level: 5 },
  { name: "Node.js", icon: <FaNodeJs />, level: 5 },
  { name: "MySQL", icon: <FaDatabase />, level: 5 },
  { name: "Express.js", icon: <FaServer />, level: 5 },
  { name: "MongoDB", icon: <FaDatabase />, level: 5 },
];

const tools = [
  { name: "Git", icon: <FaGitAlt />, level: 5 },
  { name: "GitHub", icon: <FaGit />, level: 5 },
  { name: "Postman", icon: <FaTools />, level: 4 },
  { name: "Figma", icon: <FaFigma />, level: 4 },
  { name: "Netlify", icon: <FaCloud />, level: 5 },
  { name: "Render", icon: <FaCloud />, level: 4 },
  { name: "VS Code", icon: <FaCodepen />, level: 5 },
  { name: "Heroku", icon: <FaCloud />, level: 4 },
  { name: "Jira", icon: <FaJira />, level: 4 },
  { name: "Miro", icon: <FaFigma />, level: 4 },
  { name: "Namecheap", icon: <FaServer />, level: 4 },
  { name: "CodePen", icon: <FaCodepen />, level: 4 },
  { name: "MongoDB Atlas", icon: <FaDatabase />, level: 5 }
];

const Skills = () => {
  const { t } = useTranslation();

  const renderSkillCard = (skill, index) => (
    <Fades animationType="fadeSlide" key={index}>
      <div className="skill-card" title={skill.name}>
        <div className="skill-icon">{skill.icon}</div>
        <div className="skill-level">
          {"★".repeat(skill.level)}
          {"☆".repeat(5 - skill.level)}
        </div>
        <div className="skill-name">{skill.name}</div>
      </div>
    </Fades>
  );

  return (
    <section id="skills" className="skills-section">
      <Fades animationType="fadeZoom">
        <h2 className="skills-title">{t("skills.title")}</h2>
      </Fades>

      <Fades animationType="fadeZoom">
        <h3 className="skills-subtitle">💻 {t("skills.languages")}</h3>
      </Fades>
      <div className="skills-grid">{languages.map(renderSkillCard)}</div>

      <Fades animationType="fadeZoom">
        <h3 className="skills-subtitle">🔧 {t("skills.tools")}</h3>
      </Fades>
      <div className="skills-grid">{tools.map(renderSkillCard)}</div>
    </section>
  );
};

export default Skills;
