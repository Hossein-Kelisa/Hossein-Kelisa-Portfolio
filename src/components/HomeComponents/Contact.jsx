import { FaGithub, FaLinkedin, FaEnvelope, FaSlack } from "react-icons/fa";
import Fades from "../../Animations/Fades";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
  {
    href: "https://slack.com/Hossein-kelisa",
    icon: <FaSlack />,
    detail: "slack.com/Hossein-kelisa",
  },
];

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact" className="contact-section">
      <Fades animationType="fadeUp">
        <h2 className="contact-title">{t("contact.title")}</h2>
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

      <Fades animationType="fadeUp">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Get in Touch</h3>
          <p className="form-description">Feel free to contact me for projects, collaborations, or questions. I usually reply within one day!</p>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </Fades>
    </section>
  );
};

export default Contact;
