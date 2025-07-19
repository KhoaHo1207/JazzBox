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
      J1: "Jam Mood ",
      J2: "- Where Emotions Lead the Way",
      A1: "“I Don't Follow the Mold”",
      A2: "- Don't Follow the Routine",
      Z1: "“Oh my gosh, why is it so captivating?”",
      Z2: "- Makes you exclaim",
      ZZ1: "The main thing is to be happy",
      ZZ2: "- Because Jazz just needs to be “real”",
      FinalTitle1: "Jazz Box",
      FinalTitle2: "is bringing the Jazz spirit to you",
      FinalText1: "What will you discover",
      FinalText2: "when you open this box?",
    },
  },
  vi: {
    translation: {
      Language: "VIE",
      Action: "Chạm để tiếp tục",
      Slogan: "Có những “ngôn ngữ” không thể giải thích, chỉ có thể cảm nhận",
      Discover: "Bạn đã khám phá ra",
      Jazzbox: "JAZZ BOX",
      J1: "Jam tâm trạng",
      J2: "– Nơi cảm xúc dẫn lối",
      A1: "“Anh chẳng theo khuôn”",
      A2: "- Không đi theo lối mòn",
      Z1: "“Zời ơi, sao cuốn vậy?”",
      Z2: "- Khiến bạn phải thốt lên",
      ZZ1: "Zui là chính ",
      ZZ2: "– Vì Jazz chỉ cần “thật”",
      FinalTitle1: "Jazz Box",
      FinalTitle2: "đang mang tinh thần Jazz đến với bạn.",
      FinalText1: "Bạn sẽ khám phá được gì",
      FinalText2: "khi mở chiếc hộp này?",
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
