import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JazzBoxLogo from "../assets/images/Logo chính 3.png";
import Saxophone from "../assets/images/Saxophone.png";
import Micro from "../assets/images/Micro.png";
import Note1 from "../assets/images/1.png";
import Note2 from "../assets/images/2.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [clicked, setClicked] = useState(false);
  const { t } = useTranslation();
  // Variants cho logo
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: (custom) => ({
      opacity: 0,
      x: custom.x * 2,
      y: custom.y * 2,
      transition: { duration: 0.7, ease: "easeInOut" },
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: [0, -10, 0], // nhấp nhô nhẹ
      transition: {
        opacity: { duration: 0.7 }, // fade-in chậm
        y: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    },
  };

  // Variants cho text "Tôi là Khoa"
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.8, duration: 1 } },
  };

  return (
    <>
      <div className="relative max-w-[90vw] h-[450px] mx-auto mt-20 flex flex-col items-center justify-center">
        {/* Logo chính giữa */}
        <motion.img
          src={JazzBoxLogo}
          alt="Jazz Box Logo"
          className="absolute top-1/4 left-1/4 w-[200px] h-auto -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] z-10"
          variants={logoVariants}
          initial="hidden"
          animate={clicked ? "hidden" : "visible"}
          exit="hidden"
        />

        <AnimatePresence>
          {!clicked &&
            [
              {
                src: Saxophone,
                alt: "Saxophone",
                style: "top-5 left-5",
                x: -100,
                y: -100,
              },
              {
                src: Note1,
                alt: "Note1",
                style: "top-5 right-5",
                x: 100,
                y: -100,
              },
              {
                src: Note2,
                alt: "Note2",
                style: "bottom-5 left-5",
                x: -100,
                y: 100,
              },
              {
                src: Micro,
                alt: "Micro",
                style: "bottom-5 right-5",
                x: 100,
                y: 100,
              },
            ].map(({ src, alt, style, x, y }) => (
              <motion.img
                key={alt}
                src={src}
                alt={alt}
                className={`absolute w-auto h-auto ${style} block`}
                style={{
                  width:
                    alt === "Micro"
                      ? 20
                      : alt === "Note1"
                      ? 33
                      : alt === "Note2"
                      ? 39
                      : 42,
                }}
                custom={{ x, y }}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            ))}
        </AnimatePresence>

        {/* Text hiện ra sau */}
        <AnimatePresence>
          {clicked && (
            <motion.div
              className="
        text-[#D4AF37]
        text-2xl md:text-3xl
        font-playfair
        font-semibold
        tracking-wide
        drop-shadow-md
        text-center
        z-20
        select-none
        px-4
      "
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={textVariants}
            >
              {t("Slogan")}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Nút bấm để kích hoạt */}

      <motion.div
        className="flex items-center justify-center mt-20 mb-5 overflow-visible" // thêm đây
        onClick={() => setClicked(true)}
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
    </>
  );
};

export default Hero;
