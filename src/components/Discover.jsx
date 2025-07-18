import React from "react";
import { useTranslation } from "react-i18next";

const Discover = () => {
  const { t } = useTranslation();
  return (
    <div className="text-3xl font-vipmontra text-jazz-orange mt-10">
      <h5>{t("Discover")}</h5>
      <h4 className="my-1">{t("Jazzbox")}</h4>
    </div>
  );
};

export default Discover;
