import "./ServicesHero.css";

const ServicesHero = () => {
  return (
    <section className="services-hero-section">
      <div className="services-hero-overlay">
        <h1 className="services-hero-title">My Services</h1>
        <p className="services-hero-subtitle">
          I build modern, fast, and user-friendly web applications. Clean
          design, strong performance, and full-stack solutions for your
          business.
        </p>

        <div className="services-hero-buttons">
          <button className="services-hero-btn primary">Requirements</button>
          <button className="services-hero-btn secondary">Skills</button>
          <button className="services-hero-btn secondary">Projects</button>
        </div>
      </div>
      <div className="Back-to-Portfolio-button-container">
        <button className="Back-to-Portfolio-button">Back to Portfolio</button>
      </div>
    </section>
  );
};

export default ServicesHero;
