import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Slogan = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-40">
      <p className="text-left text-3xl font-vipmontra text-jazz-gold">
        {t("Slogan")}
      </p>
    </div>
  );
};

export default Slogan;
