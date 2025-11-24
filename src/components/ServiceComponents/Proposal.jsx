import Fades from "../../Animations/Fades";
import "./Proposal.css";
import { FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Proposal = () => {
  const { t } = useTranslation();

  return (
    <section id="requirements" className="proposal-section">
      <Fades animationType="fadeUp">
        <h2 className="proposal-title">{t("proposal.title")}</h2>
      </Fades>

      <Fades animationType="fadeUp">
        <p className="proposal-text">{t("proposal.description")}</p>

        <a
          href="/Website_Requirement.pdf"
          download
          className="proposal-download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("proposal.download")} <FaFilePdf className="proposal-icon" />
        </a>
      </Fades>
    </section>
  );
};

export default Proposal;
