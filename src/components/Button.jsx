import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StepContext } from "../context/StepContext";
import { motion } from "framer-motion";

const Button = () => {
  const { t } = useTranslation();
  const { currentStep, setCurrentStep, setHeroAnimation } =
    useContext(StepContext);

  const handleNextStep = () => {
    switch (currentStep) {
      case 1:
        setHeroAnimation(false);
        break;
      default:
        setCurrentStep((prev) => prev + 1);
    }
  };
  return (
    <motion.button
      className="font-viprasta text-xl text-jazz-orange"
      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
      onClick={handleNextStep}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileTap={{ scale: 0.9 }}
    >
      {t("Action")}
    </motion.button>
  );
};

export default Button;
