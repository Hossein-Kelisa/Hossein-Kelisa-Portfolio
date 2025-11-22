import { FaGithub, FaLinkedin, FaEnvelope, FaSlack } from "react-icons/fa";
import Fades from "../../Animations/Fades";
import "./Contact.css";
// import { useTranslation } from "react-i18next";
import { useState } from "react";

const contacts = [
  {
    href: "mailto:Hossein.kelisa@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    href: "https://github.com/Hossein-kelisa",
    icon: <FaGithub />,
  },
  {
    href: "https://linkedin.com/in/Hossein-kelisa",
    icon: <FaLinkedin />,
  },
  {
    href: "https://slack.com/Hossein-kelisa",
    icon: <FaSlack />,
  },
];

const Contact = () => {
  // const { t } = useTranslation();
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
      <div className="contact-container">
        <div className="left-side">
          <Fades animationType="fadeUp">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              Feel free to contact me for projects, collaborations, or any
              questions. I usually reply within one day!
            </p>

            <div className="contact-grid">
              {contacts.map(({ href, icon }, index) => (
                <a
                  className="contact-icon"
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </a>
              ))}
            </div>
          </Fades>
        </div>

        {/* Contact Form */}
        <Fades animationType="fadeUp">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Contact Me</h3>

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
      </div>
    </section>
  );
};

export default Contact;
