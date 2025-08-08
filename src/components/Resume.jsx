import React from "react";
import Fades from "../Animations/Fades";
import "./Resume.css";

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
        Download
      </a>
    </Fades>
  </section>
);

export default Resume;
