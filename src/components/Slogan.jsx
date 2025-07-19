import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Slogan = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      key="slogan"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-left text-3xl font-vipmontra text-jazz-gold mt-32">
        {t("Slogan")}
      </p>
    </motion.div>
  );
};

export default Slogan;
