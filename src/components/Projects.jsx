import React from "react";
import Fades from "../Animations/Fades";
import "./Projects.css";

const Projects = () => (
  <section id="projects" className="project-section">
    <Fades animationType="fadeUp">
      <h2>Projects</h2>
    </Fades>
    <Fades animationType="fadeUp">
      <div className="project-grid">
        <div className="project-card">
          <a
            href="https://tic-eng.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Tic_eng</h3>
          </a>
          <p>
            A company website for an engineering business offering Testing,
            Inspection, and Certification services.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://c51a.hyf.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>ShareWithUs</h3>
          </a>
          <p>
            A social sharing platform where users can list and borrow items from
            each other.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/Hossein-Kelisa/The-World-of-Horses"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>World Of Horses</h3>
          </a>
          <p>
            A project showcasing horse breeds from around the world using APIs
            and a dynamic user interface.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://github.com/Hossein-Kelisa/QuizApp-SyntaxSquid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Quiz App</h3>
          </a>
          <p>
            A simple and interactive quiz application built with HTML, CSS, and
            JavaScript.
          </p>
        </div>
      </div>
    </Fades>
  </section>
);

export default Projects;
