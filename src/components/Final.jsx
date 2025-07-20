import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Box from "../assets/images/Box.png";
import { motion, AnimatePresence } from "framer-motion";

const Final = () => {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState(false);

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

  // Hàm xử lý click ảnh
  const handleClick = () => {
    setClicked(true);
    // Delay thời gian animation để chuyển trang, bằng tổng duration animation
    setTimeout(() => {
      window.location.href =
        "https://www.facebook.com/profile.php?id=61577202131369";
    }, 1200); // 1.2s đủ cho animation phóng to + di chuyển
  };

  return (
    <div className="mt-32 space-y-10 relative min-h-[400px]">
      <AnimatePresence>
        {!clicked && (
          <>
            {/* Div 1 - Tiêu đề */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
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

            {/* Div 2 - Text từng chữ xuất hiện */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-start w-full mb-20 text-xl font-viprasta text-jazz-gray"
            >
              <p>
                <AnimatedText text={t("FinalText1")} />
              </p>
              <p>
                <AnimatedText text={t("FinalText2")} />
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Div 3 - Hình ảnh */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          clicked
            ? {
                opacity: 1,
                scale: 2.5,
                x: 0,
                y: "-50vh",
                position: "fixed",
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY: "-50%",
                zIndex: 1000,
              }
            : { opacity: 1, scale: 1, position: "static", x: 0, y: 0 }
        }
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex justify-center cursor-pointer"
        onClick={handleClick}
      >
        <img src={Box} alt="Jazz Music Box" className="w-[150px] mt-10" />
      </motion.div>
    </div>
  );
};

export default Final;
