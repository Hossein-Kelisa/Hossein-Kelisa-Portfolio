import React from "react";
import Fades from "../Animations/Fades";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <Fades animationType="fadeUp">
        <h2>{t("about.title")}</h2>
      </Fades>
      <Fades animationType="fadeUp">
        <p>
          {t("about.text.part1")}
          <a href="https://www.hackyourfuture.net/" target="_blank" rel="noopener noreferrer">
            {t("about.text.link")}
          </a>
          {t("about.text.part2")}
        </p>
      </Fades>
    </section>
  );
};

export default About;
