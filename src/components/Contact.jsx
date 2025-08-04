import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="section contact">
    <h2>Contact Me</h2>
    <div className="contact-cards">

      <a href="mailto:your.email@example.com" className="contact-card" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="icon" />
        <span>Email</span>
        <p>email@gmail.com</p>
      </a>

      <a href="https://github.com/yourusername" className="contact-card" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
        <span>GitHub</span>
        <p>github.com/username</p>
      </a>

      <a href="https://linkedin.com/in/yourusername" className="contact-card" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
        <span>LinkedIn</span>
        <p>linkedin.com/in/username</p>
      </a>

      <a href="/resume.pdf" download className="contact-card">
        <FaFilePdf className="icon" />
        <span>Resume</span>
        <p>Download PDF</p>
      </a>

    </div>
  </section>
);

export default Contact;
