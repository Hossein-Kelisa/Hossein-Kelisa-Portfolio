import React from "react";
import Fades from "../Animations/Fades";
import "./Projects.css";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="project-section">
      <Fades animationType="fadeUp">
        <h2>{t("projects.title")}</h2>
      </Fades>
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
