import React from "react";
import Fades from "../Animations/Fades";
import "./Certificates.css";

const Certificates = () => (
  <section id="certificates" className="certification-section">
    <Fades animationType="fadeUp">
      <h2>Certificates</h2>
    </Fades>
    <Fades animationType="fadeUp">
      <a
        href="https://certificates.hackyourfuture.nl/VTXW4HZA"
        target="_blank"
        rel="noopener noreferrer"
        className="cert-link"
      >
        <div className="cert-card">
          <span className="cert-title">Full Stack Web Development</span>
          <span className="cert-icon">📜</span>
        </div>
      </a>
    </Fades>
  </section>
);

export default Certificates;
