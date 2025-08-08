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
          <h3>Portfolio Website</h3>
          <p>
            A responsive personal website showcasing my skills and projects.
          </p>
        </div>
        <div className="project-card">
          <h3>Data Viewer</h3>
          <p>
            An app that displays and filters external data using APIs and React.
          </p>
        </div>
      </div>
    </Fades>
  </section>
);

export default Projects;
