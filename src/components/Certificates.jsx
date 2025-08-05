import React from 'react';
import '../Section.css';
import './Certificates.css';

const Certificates = () => (
  <section id="certificates" className="section">
    <h2>Certificates</h2>
    <ul className="cert-list">
      <li>
        <strong>HackYourFuture</strong><br />
        Completed: July 2025
      </li>
      <li>
        <strong>FreeCodeCamp</strong><br />
        Completed: May 2025
      </li>
    </ul>
  </section>
);

export default Certificates;
