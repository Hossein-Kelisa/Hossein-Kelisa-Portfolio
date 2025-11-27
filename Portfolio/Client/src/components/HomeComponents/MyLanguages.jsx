import "./MyLanguages.css";
import Fades from "../../Animations/Fades";
import { useTranslation } from "../../../node_modules/react-i18next";

function MyLanguages() {
  const { t } = useTranslation();

  const getLevel = (percent) => {
    if (percent >= 90) return t("languages.level.native");
    if (percent >= 70) return t("languages.level.advanced");
    if (percent >= 50) return t("languages.level.intermediate");
    if (percent >= 30) return t("languages.level.basic");
    return t("languages.level.beginner");
  };

  const languages = [
    { name: t("languages.name.azeri"), percent: 100 },
    { name: t("languages.name.persian"), percent: 100 },
    { name: t("languages.name.turkish"), percent: 50 },
    { name: t("languages.name.english"), percent: 60 },
    { name: t("languages.name.dutch"), percent: 40 },
  ];

  return (
    <div id="my-languages" className="lang-container">
      <Fades animationType="fadeZoom">
        <h2 className="lang-title">{t("languages.title")}</h2>
      </Fades>

      <Fades animationType="fadeRight">
        <div className="lang-list">
          {languages.map((lang, index) => (
            <div key={index} className="lang-item">
              <div className="lang-header">
                <span className="lang-name">{lang.name}</span>
                <span className="lang-level">{getLevel(lang.percent)}</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${lang.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Fades>
    </div>
  );
}

export default MyLanguages;
