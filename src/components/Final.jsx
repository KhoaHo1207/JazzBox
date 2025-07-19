import React from "react";
import { useTranslation } from "react-i18next";
import Box from "../assets/images/Box.png";
import { motion } from "framer-motion";

const Final = () => {
  const { t } = useTranslation();

  // Animation container để stagger các chữ cái div 2
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Animation từng chữ
  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const splitText = (text) => text.split("");

  const AnimatedText = ({ text }) => (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {splitText(text).map((char, idx) => (
        <motion.span
          key={idx}
          variants={letter}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <div className="mt-32 space-y-10">
      {/* Div 1 - Tiêu đề */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10"
      >
        <h5 className="font-vipmontra text-3xl text-jazz-orange">
          {t("FinalTitle1")}
        </h5>
        <h5 className="font-vipmontra text-3xl text-jazz-orange">
          {t("FinalTitle2")}
        </h5>
      </motion.div>

      {/* Div 2 - Text từng chữ xuất hiện, delay để chờ div 1 */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9 }} // Chờ div 1 xong rồi mới xuất hiện
        className="flex flex-col items-start w-full mb-20 text-xl font-viprasta text-jazz-gray"
      >
        <p>
          <AnimatedText text={t("FinalText1")} />
        </p>
        <p>
          <AnimatedText text={t("FinalText2")} />
        </p>
      </motion.div>

      {/* Div 3 - Hình ảnh mở nhỏ to ra, delay để chờ div 2 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.9, ease: "easeOut" }}
        className="flex justify-center"
      >
        <a href="https://www.facebook.com/profile.php?id=61577202131369">
          <img src={Box} alt="Jazz Music Box" className="w-[150px] mt-10" />
        </a>
      </motion.div>
    </div>
  );
};

export default Final;
