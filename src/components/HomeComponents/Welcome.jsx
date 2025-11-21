import "./Welcome.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <section className="welcome-section">
      <Fades animationType="fadeZoom">
        <h1 className="welcome-title">
          {t("welcome.homeGreeting", { name: "Hossein" })}
        </h1>
      </Fades>
      <p className="welcome-subtitle">{t("welcome.homeSubtitle1")}</p>
    </section>
  );
};

export default Welcome;
