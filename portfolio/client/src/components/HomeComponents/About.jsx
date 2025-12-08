import Fades from "../../Animations/Fades";
import "./About.css";
import { useTranslation } from "../../../node_modules/react-i18next";
import aboutImg from "../../assets/my-image.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <Fades animationType="fadeRight">
          <div className="about-image-wrapper">
            <img src={aboutImg} alt="About" className="about-image" />
          </div>
        </Fades>

        <Fades animationType="fadeLeft">
          <div className="about-text">
            <h2 className="about-title">{t("about.title")}</h2>

            <p className="about-description">
              {t("about.text.part1")}
              <a
                href="https://www.hackyourfuture.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("about.text.link")}
              </a>
              {t("about.text.part2")}
            </p>

            <p className="about-description">{t("about.text.part3")}</p>
          </div>
        </Fades>
      </div>
    </section>
  );
};

export default About;
