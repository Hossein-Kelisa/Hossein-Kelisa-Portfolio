import React from 'react';
import '../Section.css';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="project-grid">
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>A responsive personal website showcasing my skills and projects.</p>
      </div>
      <div className="project-card">
        <h3>Data Viewer</h3>
        <p>An app that displays and filters external data using APIs and React.</p>
      </div>
    </div>
  </section>
);

export default Projects;
