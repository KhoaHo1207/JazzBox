import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Button = ({ step, setStep }) => {
  const { t } = useTranslation();

  const handleNextStep = () => {
    setStep(step + 1);
  };

  return (
    <motion.div
      className="flex items-center justify-center mt-20 mb-5 overflow-visible" // thêm đây
      onClick={handleNextStep}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 15px rgba(212,175,55,0.6)",
          borderColor: "#D4AF37",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 8px rgba(212,175,55,0.3)",
            "0 0 15px rgba(212,175,55,0.6)",
            "0 0 8px rgba(212,175,55,0.3)",
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="
      relative
      z-10
      px-6 py-2
      rounded-full
      border
      border-[#D4AF37]/30
      bg-transparent
      text-transparent bg-clip-text
      bg-gradient-to-r from-[#D4AF37] via-[#F0C674] to-[#B25A1C]
      font-semibold
      drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
      shadow-inner
      backdrop-blur-sm
      focus:outline-none
    "
      >
        {t("Action")}
      </motion.button>
    </motion.div>
  );
};

export default Button;
