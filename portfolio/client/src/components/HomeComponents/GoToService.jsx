import "./GoToService.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "../../../node_modules/react-i18next";

const GoToService = () => {
  const { t } = useTranslation();

  return (
    <div className="GoToService-container">
      <div className="GoToService-content">
        <Fades animationType="fadeUp">
          <h2>{t("goToService.title")}</h2>
          <p>{t("goToService.text")}</p>
        </Fades>
      </div>
      <div className="GoToService-button">
        <Fades animationType="fadeZoom">
          <a href="/services" className="GoToService-link">
            {t("goToService.button")} &#8594;
          </a>
        </Fades>
      </div>
    </div>
  );
};

export default GoToService;
