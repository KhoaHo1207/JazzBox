import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";

const initLang = Cookies.get("lang") || "vi";

const resources = {
  en: {
    translation: {
      Language: "ENG",
      Action: "Touch to continue",
      Slogan: "There are “languages” that cannot be explained, only felt.",
      Discover: "You have discovered",
      Jazzbox: "JAZZ BOX",
      J: "Jam Mood - Where Emotions Lead the Way",
      A: "“I Don't Follow the Mold” - Don't Follow the Routine",
      Z1: "“Oh my gosh, why is it so captivating?” - makes you exclaim",
      Z2: "The main thing is to be happy - because Jazz just needs to be “real”",
      Final1: "Jazz Box is bringing the Jazz spirit to you.",
      Final2: "What will you discover when you open this box?",
    },
  },
  vi: {
    translation: {
      Language: "VIE",
      Action: "Chạm để tiếp tục",
      Slogan: "Có những “ngôn ngữ” không thể giải thích, chỉ có thể cảm nhận",
      Discover: "Bạn đã khám phá ra",
      Jazzbox: "JAZZ BOX",
      J: "Jam tâm trạng – nơi cảm xúc dẫn lối",
      A: "“Anh chẳng theo khuôn” - Không đi theo lối mòn",
      Z1: "“Zời ơi, sao cuốn vậy?” - khiến bạn phải thốt lên",
      Z2: "Zui là chính – vì Jazz chỉ cần “thật”",
      Final1: "Jazz Box đang mang tinh thần Jazz đến với bạn.",
      Final2: "Bạn sẽ khám phá được gì khi mở chiếc hộp này?",
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
