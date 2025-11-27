import Fades from "../../Animations/Fades";
import "./Certificates.css";
import { useTranslation } from "../../../node_modules/react-i18next";

const Certificates = () => {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="certification-section">
      <Fades animationType="fadeUp">
        <h2>{t("certificates.title")}</h2>
      </Fades>
      <Fades animationType="fadeUp">
        <a
          href="https://certificates.hackyourfuture.nl/VTXW4HZA"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
          <div className="cert-card">
            <span className="cert-title">{t("certificates.fullStack")}</span>
          </div>
        </a>
      </Fades>
    </section>
  );
};

export default Certificates;
