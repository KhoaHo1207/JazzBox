import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Slogan = () => {
  const { t, i18n } = useTranslation();
  const textSize = i18n.language === "en" ? "text-2xl" : "text-3xl";

  return (
    <motion.div
      key="slogan"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p
        className={`${textSize} text-left  font-vipmontra text-jazz-gold mt-32`}
      >
        {t("Slogan1")}
      </p>
      <p className={`${textSize} text-left  font-vipmontra text-jazz-gold`}>
        {t("Slogan2")}
      </p>
    </motion.div>
  );
};

export default Slogan;
