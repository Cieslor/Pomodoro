import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Settings from "./en/settings.json";
import Main from "./en/main.json";
import Common from "./en/common.json";

export const resources = {
  en: {
    Settings,
    Main,
    Common,
  },
} as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    ns: ["Settings", "Main", "Common"],
    defaultNS: "Common",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    resources,
  });

export default i18n;
