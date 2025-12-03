import { FaGithub, FaLinkedin, FaEnvelope, FaSlack } from "react-icons/fa";
import Fades from "../../Animations/Fades";
import "./Contact.css";
import { useTranslation } from "../../../node_modules/react-i18next";
import { useState } from "react";
import { sendMessage } from "../../api/contact";

const contacts = [
  { href: "mailto:Hossein.kelisa@gmail.com", icon: <FaEnvelope /> },
  { href: "https://github.com/Hossein-kelisa", icon: <FaGithub /> },
  { href: "https://linkedin.com/in/Hossein-kelisa", icon: <FaLinkedin /> },
  { href: "https://slack.com/Hossein-kelisa", icon: <FaSlack /> },
];

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // <-- NEW

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // <-- START loading

    try {
      const response = await sendMessage(formData);
      console.log("Message sent successfully:", response);

      // Show success alert
      alert("Message sent successfully!");

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }

    setLoading(false); // <-- END loading
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="left-side">
          <Fades animationType="fadeUp">
            <h2 className="contact-title">{t("contact.title")}</h2>
            <p className="contact-description">{t("contact.description")}</p>

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
            <h3 className="form-title">{t("contact.formTitle")}</h3>

            <input
              type="text"
              name="name"
              placeholder={t("contact.formPlaceholders.name")}
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t("contact.formPlaceholders.email")}
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder={t("contact.formPlaceholders.message")}
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="form-button"
              disabled={loading} // <-- DISABLE BUTTON
            >
              {loading ? "Sending..." : t("contact.formButton")}
            </button>
          </form>
        </Fades>
      </div>
    </section>
  );
};

export default Contact;
