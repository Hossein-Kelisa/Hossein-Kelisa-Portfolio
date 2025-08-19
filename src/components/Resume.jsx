import React from "react";
import Fades from "../Animations/Fades";
import "./Resume.css";
import { FaFilePdf } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <section id="resume" className="resume-section">
      <Fades animationType="fadeUp">
        <h2>{t("resume.title")}</h2>
      </Fades>
      <Fades animationType="fadeUp">
        <p>{t("resume.description")}</p>
        <a
          href="/HosseinKelisa.pdf"
          download
          className="download-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("resume.download")} <FaFilePdf className="resume-icon" />
        </a>
      </Fades>
    </section>
  );
};

export default Resume;
