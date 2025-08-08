import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Fades from "../Animations/Fades";
import "./Contact.css";

const contacts = [
  {
    href: "mailto:Hossein.kelisa@gmail.com",
    icon: <FaEnvelope />,
    detail: "Hossein.kelisa@gmail.com",
  },
  {
    href: "https://github.com/Hossein-kelisa",
    icon: <FaGithub />,
    detail: "github.com/Hossein-kelisa",
  },
  {
    href: "https://linkedin.com/in/Hossein-kelisa",
    icon: <FaLinkedin />,
    detail: "linkedin.com/in/Hossein-kelisa",
  },
];

const Contact = () => (
  <section id="contact" className="contact-section">
    <Fades animationType="fadeUp">
      <h2 className="contact-title">Contact Me</h2>
    </Fades>
    <Fades animationType="fadeUp">
      <div className="contact-grid">
        {contacts.map(({ href, icon, detail }, index) => (
          <a
            key={index}
            href={href}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">{icon}</div>
            <div className="contact-info">
              <p className="contact-detail">{detail}</p>
            </div>
          </a>
        ))}
      </div>
    </Fades>
  </section>
);

export default Contact;
