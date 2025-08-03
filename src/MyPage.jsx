import React from 'react';
import './MyPage.css';

const MyPage = () => {
  return (
    <div className="page-container">
      <header className="header">
        <h1 className="site-title">Hossein's Portfolio</h1>
        <p className="site-subtitle">Welcome to my personal website!</p>
      </header>

      <main>
        <section className="section about">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I’m studying <strong>[Your Field]</strong> at <strong>[Your University]</strong>. Passionate about technology, learning, and building cool stuff.
          </p>
        </section>

        <section className="section projects">
          <h2 className="section-title">Projects</h2>
          <ul className="project-list">
            <li><strong>Project 1:</strong> Description of your project.</li>
            <li><strong>Project 2:</strong> Another cool thing you built.</li>
          </ul>
        </section>

        <section className="section contact">
          <h2 className="section-title">Contact</h2>
          <p>Email: <a href="mailto:your.email@example.com" className="contact-link">your.email@example.com</a></p>
          <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link">yourusername</a></p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Hossein</p>
      </footer>
    </div>
  );
};

export default MyPage;
