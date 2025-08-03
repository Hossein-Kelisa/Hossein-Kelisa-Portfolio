import React from 'react';
import './MyPage.css';

const MYPage = () => {
  return (
    <div>
      <header>
        <h1>Hossein's Portfolio</h1>
        <p>Welcome to my personal website!</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>I’m studying [Your Field] at [Your University]. Passionate about technology, learning, and building cool stuff.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Project 1:</strong> Description of your project.</li>
          <li><strong>Project 2:</strong> Another cool thing you built.</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">yourusername</a></p>
      </section>

      <footer style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#555' }}>
        <p>© 2025 Hossein</p>
      </footer>
    </div>
  );
};

export default MYPage;
