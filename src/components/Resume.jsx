import React from "react";
import Fades from "../Animations/Fades";
import "./Resume.css";
import { FaFilePdf } from "react-icons/fa"

const Resume = () => (
  <section id="resume" className="resume-section">
    <Fades animationType="fadeUp">
      <h2>Resume</h2>
    </Fades>
    <Fades animationType="fadeUp">
      <p>You can download my resume here:</p>
      <a
        href="/HosseinKelisa.pdf"
        download
        className="download-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download  <FaFilePdf className="resume-icon" />
      </a>
    </Fades>
  </section>
);

export default Resume;
