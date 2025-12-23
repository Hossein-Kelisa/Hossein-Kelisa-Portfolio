import "./Welcome.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "../../../node_modules/react-i18next";

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
      {/* <span className="infinity">I am </span> */}
    </section>
  );
};

export default Welcome;
