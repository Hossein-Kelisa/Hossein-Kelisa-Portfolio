import Fades from "../../Animations/Fades";
import "./Projects.css";
import { useTranslation } from "../../../node_modules/react-i18next";
import ProjectImg from "../../assets/Project-img.jpg";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="project-section">
      <div className="projects-header">
        <Fades animationType="fadeRotate">
          <div className="projects-image-wrapper">
            <img
              src={ProjectImg}
              alt="Projects Preview"
              className="projects-image"
            />
          </div>
        </Fades>

        <div className="projects-text">
          <Fades animationType="fadeUp">
            <h2 className="projects-title">{t("projects.title")}</h2>
          </Fades>

          <Fades animationType="fadeUp">
            <p className="projects-description">
              {t("projects.intro", {
                defaultValue:
                  "Here are some of the professional projects I have built — from full-stack applications to interactive websites. Each project reflects my clean coding style, performance-first mindset, and dedication to creating user-friendly digital experiences.",
              })}
            </p>
          </Fades>
        </div>
      </div>

      <Fades animationType="fadeUp">
        <div className="project-grid">
          <div className="project-card">
            <a
              href="https://tic-eng.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{t("projects.ticEng.title")}</h3>
            </a>
            <p>{t("projects.ticEng.description")}</p>
          </div>

          <div className="project-card">
            <a
              href="https://c51a.hyf.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{t("projects.shareWithUs.title")}</h3>
            </a>
            <p>{t("projects.shareWithUs.description")}</p>
          </div>

          <div className="project-card">
            <a
              href="https://hossein-kelisa.github.io/The-World-of-Horses/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{t("projects.worldOfHorses.title")}</h3>
            </a>
            <p>{t("projects.worldOfHorses.description")}</p>
          </div>

          <div className="project-card">
            <a
              href="https://hossein-kelisa.github.io/QuizApp-SyntaxSquid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{t("projects.quizApp.title")}</h3>
            </a>
            <p>{t("projects.quizApp.description")}</p>
          </div>
        </div>
      </Fades>
    </section>
  );
};

export default Projects;
