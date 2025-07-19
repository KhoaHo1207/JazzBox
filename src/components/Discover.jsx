import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Discover = ({ currentStep }) => {
  const { t } = useTranslation();

  const AnimatedWrapper = currentStep === 3 ? motion.div : "div";

  return (
    <AnimatedWrapper
      {...(currentStep === 3 && {
        initial: { opacity: 0, y: 80 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
      })}
      className="text-3xl font-vipmontra text-jazz-orange mt-10"
    >
      <h5>{t("Discover")}</h5>
      <h4 className="my-1">{t("Jazzbox")}</h4>
    </AnimatedWrapper>
  );
};

export default Discover;
