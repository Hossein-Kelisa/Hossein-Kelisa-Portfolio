import "./Text.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "react-i18next";

const Text = () => {
  const { t } = useTranslation();

  return (
    <section className="text-section">
      <Fades animationType="fadeZoom">
        <p className="text-subtitle">{t("text.subtitle")}</p>
      </Fades>
    </section>
  );
};

export default Text;
