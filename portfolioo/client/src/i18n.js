import i18n from "i18next";
import { initReactI18next } from "../node_modules/react-i18next";
import en from "./locales/en.json";
import fa from "./locales/fa.json";
import du from "./locales/du.json";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
    du: { translation: du },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
});

export default i18n;
