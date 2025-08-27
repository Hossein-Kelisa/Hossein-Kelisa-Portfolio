import Fades from "../Animations/Fades";
import "./About.css";

const About = () => (
  <section id="about" className="about-section">
    <Fades animationType="fadeUp">
      <h2>About Me</h2>
    </Fades>
    <Fades animationType="fadeUp">
      <p>
        I'm a junior full-stack developer based in the Netherlands 🇳🇱,
        passionate about building modern, user-focused web applications with
        JavaScript, React, and Node.js. After completing <a href="https://www.hackyourfuture.net/" target="_blank" rel="noopener noreferrer">HackYourFuture</a>’s program, I gained real-world experience, practiced clean code,
        and learned to collaborate effectively in teams. I enjoy solving
        problems, learning continuously, and transforming ideas into functional
        digital products.
      </p>
    </Fades>
  </section>
);

export default About;
