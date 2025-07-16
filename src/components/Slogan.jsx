import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Slogan = () => {
  const { t } = useTranslation();
  const slogan = t("Slogan"); // Ví dụ: "Có những ngôn ngữ không thể giải thích, chỉ có thể cảm nhận"

  const letters = slogan.split("");

  return (
    <div className="text-center px-4 mt-10">
      <motion.div
        className="text-[#D4AF37] text-xl font-playfair italic"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.05, // khoảng cách thời gian giữa từng chữ
            },
          },
        }}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default Slogan;
