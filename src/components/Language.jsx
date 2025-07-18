import React, { useState, useRef, useEffect } from "react";
import VietNamFlag from "../assets/images/vietnam-flag-icon-32.png";
import UnitedKingdomFlag from "../assets/images/united-kingdom-flag-icon-32.png";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Icons from "../constants/Icons";

const Language = () => {
  const { t, i18n } = useTranslation();
  const { ArrowDropDown } = Icons;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    Cookies.set("language", lang, { expires: 7 });
    setIsOpen(false);
  };

  const currentFlag = i18n.language === "vi" ? VietNamFlag : UnitedKingdomFlag;
  const currentText = i18n.language === "vi" ? "Tiếng Việt" : "English";

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative font-viprasta text-gray-800" ref={dropdownRef}>
      <button
        className="flex items-center gap-1.5 rounded-md bg-[#FFE7D1] transition duration-200"
        onClick={handleToggle}
      >
        <img
          src={currentFlag}
          alt={currentText}
          className="size-5 rounded-full"
        />
        <span className="text-sm">{currentText}</span>
        <ArrowDropDown backgroundcolor="#333" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-[#FFF3E5] border border-[#FFD9B5] rounded-md shadow-md z-50">
          <div
            onClick={() => handleChangeLanguage("vi")}
            className="flex items-center gap-2 px-3 py-2 hover:bg-[#FFE0BF] cursor-pointer"
          >
            <img
              src={VietNamFlag}
              alt="Tiếng Việt"
              className="size-5 rounded-full"
            />
            <span className="text-sm">Tiếng Việt</span>
          </div>
          <div
            onClick={() => handleChangeLanguage("en")}
            className="flex items-center gap-2 px-3 py-2 hover:bg-[#FFE0BF] cursor-pointer"
          >
            <img
              src={UnitedKingdomFlag}
              alt="English"
              className="size-5 rounded-full"
            />
            <span className="text-sm">English</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
