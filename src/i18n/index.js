import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

const initLang = Cookies.get("lang") || "vi";

const resources = {
  en: {
    translation: {
      Language: "ENG",
      Action: "Touch to continue",
      Slogan: "There are languages that cannot be explained, only felt.",
    },
  },
  vi: {
    translation: {
      Language: "VIE",
      Action: "Chạm để tiếp tục",
      Slogan: "Có những ngôn ngữ không thể giải thích, chỉ có thể cảm nhận",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: initLang,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
