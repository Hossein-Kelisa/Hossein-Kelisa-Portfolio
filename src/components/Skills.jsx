import React from 'react';
import './Skills.css'; 

const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 'Expert' },
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'HTML', level: 'Expert' }
    ];
    
    return (
        <div className="skills-container">
        <h2>Skills</h2>
        <ul className="skills-list">
            {skills.map((skill, index) => (
            <li key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}</span>
            </li>
            ))}
        </ul>
        </div>
    );
    }
export default Skills;
