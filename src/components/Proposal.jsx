import Fades from "../Animations/Fades";
import "./Proposal.css";
import { FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Proposal = () => {
  const { t } = useTranslation();

  return (
    <section id="proposal" className="proposal-section">
      <Fades animationType="fadeUp">
        <h2>{t("proposal.title")}</h2>
      </Fades>
      <Fades animationType="fadeUp">
        <p>{t("proposal.description")}</p>
        <a
          href="/Website_Requirement.pdf"
          download
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("proposal.download")} <FaFilePdf className="proposal-icon" />
        </a>
      </Fades>
      <form
        name="requirement-form"
        method="POST"
        data-netlify="true"
        encType="multipart/form-data"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="details"
          placeholder="Your answers here"
          required
        ></textarea>
        <label>
          Upload File (PDF, DOC, JPG, max 10MB):
          <input
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx,.jpg,.png"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <section id="languages">
        <h2>Languages</h2>
        <div>
          <h3>Spoken Languages:</h3>
          <ul>
            <li>Persian (Native)</li>
            <li>Azeri (Native)</li>
            <li>Turkish (Native)</li>
            <li>English (Advanced)</li>
            <li>Dutch (Intermediate)</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Proposal;
