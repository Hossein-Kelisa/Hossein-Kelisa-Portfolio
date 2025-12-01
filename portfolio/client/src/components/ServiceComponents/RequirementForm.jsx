import "./RequirementForm.css";
import { useTranslation } from "../../../node_modules/react-i18next";
import Fades from "../../Animations/Fades";
import { sendMessage } from "../../api/contact";
import { useState } from "react";

const RequirementForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "attachment") {
      setFormData({ ...formData, attachment: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData for file upload
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    if (formData.attachment) {
      data.append("attachment", formData.attachment);
    }

    try {
      const response = await sendMessage(data);
      console.log("Request sent successfully:", response);

      alert("Request sent successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        attachment: null,
      });

      // Reset file input manually
      document.querySelector('input[name="attachment"]').value = "";
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send request. Please try again later.");
    }
  };

  return (
    <section className="requirement-container">
      <Fades animationType="fadeUp">
        <h2 className="requirement-title">{t("requirement.title")}</h2>
        <p className="requirement-subtitle">{t("requirement.subtitle")}</p>

        <form onSubmit={handleSubmit} className="requirement-form">
          <input type="hidden" name="form-name" value="requirement-form" />

          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={t("requirement.name")}
              className="requirementForm-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={t("requirement.email")}
              className="requirementForm-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder={t("requirement.message")}
              className="requirementForm-input"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group file-group">
            <label className="file-label">{t("requirement.uploadLabel")}</label>
            <input
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="file-input"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            {t("requirement.submitButton")}
          </button>
        </form>
      </Fades>
    </section>
  );
};

export default RequirementForm;
