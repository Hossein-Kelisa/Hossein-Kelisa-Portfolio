import React from 'react';
import './Projects.css'; 

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="project-grid">
      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>A personal website built using React + Vite with modern design.</p>
      </div>
      <div className="project-card">
        <h3>Weather App</h3>
        <p>Simple weather app using OpenWeather API, shows live weather data.</p>
      </div>
    </div>
  </section>
);

export default Projects;
