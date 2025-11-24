import "./RequirementForm.css";
import { useTranslation } from "react-i18next";

function RequirementForm() {
  const { t } = useTranslation();

  return (
    <section className="requirement-container">
      <h2 className="requirement-title">{t("requirement.title")}</h2>
      <p className="requirement-subtitle">{t("requirement.subtitle")}</p>

      <form
        name="requirement-form"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
        className="requirement-form"
      >
        <input type="hidden" name="form-name" value="requirement-form" />

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder={t("requirement.name")}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder={t("requirement.email")}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="details"
            placeholder={t("requirement.details")}
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
          />
        </div>

        <button type="submit" className="submit-btn">
          {t("requirement.submitButton")}
        </button>
      </form>
    </section>
  );
}

export default RequirementForm;
