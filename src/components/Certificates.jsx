import React from 'react';
import './Certificates.css'; 

const Certificates = () => (
  <section id="certificates" className="section">
    <h2>Certificates</h2>
    <ul className="cert-list">
      <li>
        <strong>HackYourFuture - Web Development</strong><br />
        Completed: July 2025
      </li>
      <li>
        <strong>FreeCodeCamp - JavaScript Algorithms</strong><br />
        Completed: May 2025
      </li>
      {/* Add more if needed */}
    </ul>
  </section>
);

export default Certificates;
