import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import CloseBox from "../assets/images/Asset 2.png";
import OpenBox from "../assets/images/Asset 1.png";

const Final = () => {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState(false);
  const [showOpenBox, setShowOpenBox] = useState(false);

  const handleClick = () => {
    setClicked(true);
    // Delay OpenBox appearance for smoother transition
    setTimeout(() => {
      setShowOpenBox(true);
    }, 300);

    // Redirect after animation
    setTimeout(() => {
      window.location.href = "https://www.facebook.com/JazzBox";
    }, 1800);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

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
      exit="exit"
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
    <div className="mt-32 space-y-10 relative min-h-[400px] overflow-hidden">
      <AnimatePresence>
        {!clicked && (
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mb-10"
          >
            <h5 className="font-vipmontra text-3xl text-jazz-orange">
              {t("FinalTitle1")}
            </h5>
            <h5 className="font-vipmontra text-3xl text-jazz-orange">
              {t("FinalTitle2")}
            </h5>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!clicked && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-start w-full mb-20 text-xl font-viprasta text-jazz-gray"
          >
            <p>
              <AnimatedText text={t("FinalText1")} />
            </p>
            <p>
              <AnimatedText text={t("FinalText2")} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          clicked
            ? {
                opacity: 1,
                scale: 2.8,
                position: "fixed",
                top: "50%",
                left: "50%",
                x: "-50%",
                y: "-50%",
                zIndex: 1000,
              }
            : {
                opacity: 1,
                scale: 1,
                position: "static",
                x: 0,
                y: 0,
              }
        }
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 18,
        }}
        onClick={handleClick}
        className={`flex justify-center cursor-pointer ${
          showOpenBox ? "glow" : ""
        }`}
      >
        <motion.img
          key={clicked ? "open" : "close"}
          src={showOpenBox ? OpenBox : CloseBox}
          alt="Jazz Music Box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[130px] mt-10"
        />
      </motion.div>

      {/* Glow effect style */}
      <style jsx>{`
        .glow img {
          filter: drop-shadow(0 0 25px #ffa500aa);
        }
      `}</style>
    </div>
  );
};

export default Final;
