import React from "react";
import "./Skills.css";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import Fades from "../Animations/Fades"; 

const skills = [
    { name: 'JavaScript', icon: <FaJs />, level: 4 },
    { name: 'React', icon: <FaReact />, level: 4 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 5 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 4 },
    { name: 'Git', icon: <FaGitAlt />, level: 3 },
  ];

const Skills = () => {
  return (
    <section className="skills-section">
      <Fades animationType="fadeZoom">
        <h2 className="skills-title">Skills</h2>
      </Fades>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Fades animationType="fadeSlide" key={index}>
            <div className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-level">
                {"★".repeat(skill.level)}
                {"☆".repeat(5 - skill.level)}
              </div>
            </div>
          </Fades>
        ))}
      </div>
    </section>
  );
};

export default Skills;
