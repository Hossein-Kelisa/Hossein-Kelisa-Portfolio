import React from "react";
import Fades from "../Animations/Fades";
import "./Certificates.css";

const Certificates = () => (
  <section id="certificates" className="certification-section">
    <Fades animationType="fadeUp">
      <h2>Certificates</h2>
    </Fades>
    <Fades animationType="fadeUp">
      <ul className="cert-list">
        <li>
          <strong>HackYourFuture</strong>
          <br />
          Completed: July 2025
        </li>
        <li>
          <strong>FreeCodeCamp</strong>
          <br />
          Completed: May 2025
        </li>
      </ul>
    </Fades>
  </section>
);

export default Certificates;
