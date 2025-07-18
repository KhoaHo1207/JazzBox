import React from "react";
import VietNamFlag from "../assets/images/vietnam-flag-icon-32.png";
import UnitedKingdomFlag from "../assets/images/united-kingdom-flag-icon-32.png";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Icons from "../constants/Icons";

const Language = () => {
  const { t, i18n } = useTranslation();
  const { ArrowDropDown } = Icons;
  const handleChangeLanguage = () => {
    const newLang = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
    Cookies.set("language", newLang, { expires: 7 });
  };

  const currentFlag = i18n.language === "vi" ? VietNamFlag : UnitedKingdomFlag;
  const altText = i18n.language === "vi" ? "Tiếng Việt" : "English";

  return (
    <div
      className="flex items-center gap-1 font-viprasta text- bg-transparent"
      onClick={handleChangeLanguage}
    >
      <img src={currentFlag} alt={altText} className="size-5 rounded-full" />
      <span className="text-sm">{t("Language")}</span>
      <ArrowDropDown backgroundcolor="#FFF3D7" />
    </div>
  );
};

export default Language;
