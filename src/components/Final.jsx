import React from "react";
import { useTranslation } from "react-i18next";
import JazzMusicBox from "../assets/images/JazzMusicBox.png";
const Final = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full flex flex-col justify-center items-center gap-10">
      <h5 className="font-vipmontra text-3xl text-jazz-orange">
        {t("Final1")}
      </h5>
      <p className="font-viprasta text-xl text-jazz-gray">{t("Final2")}</p>
      <a href="https://www.facebook.com/profile.php?id=61577202131369">
        <img
          src={JazzMusicBox}
          alt="Jazz Music Box"
          className="w-[150px] mt-10"
        />
      </a>
    </div>
  );
};

export default Final;
