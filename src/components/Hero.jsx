import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { StepContext } from "../context/StepContext";
import JazzBoxLogo from "../assets/images/Logo chính 3.png";
import Saxophone from "../assets/images/Saxophone.png";
import Micro from "../assets/images/Micro.png";
import Note1 from "../assets/images/1.png";
import Note2 from "../assets/images/2.png";

const floatY = {
  y: [0, -10, 0, 10, 0],
};

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

const Hero = () => {
  const { heroAnimation, setHeroAnimation, setCurrentStep } =
    useContext(StepContext);
  console.log(heroAnimation);

  // Khi heroAnimation false => sau 1 giây ẩn ảnh (nếu muốn)
  useEffect(() => {
    if (heroAnimation === false) {
      // Animation biến mất đang chạy, sau 1s (khớp với thời gian animation)
      const timeout = setTimeout(() => {
        setCurrentStep(2); // chuyển step
        setHeroAnimation(true); // reset animation để lần sau có thể dùng lại
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [heroAnimation, setCurrentStep, setHeroAnimation]);

  return (
    <div className="flex justify-center items-center mt-32 relative w-full h-[300px] overflow-visible">
      {/* Logo */}
      <motion.img
        src={JazzBoxLogo}
        alt="Jazz Box Logo"
        className="w-[230px] h-auto z-10 relative"
        initial={{ opacity: 1 }}
        animate={{ opacity: heroAnimation ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Top-left */}
      <motion.img
        src={Saxophone}
        alt="Saxophone"
        className="absolute top-0 left-0 w-[42px] h-auto"
        initial={{ opacity: 1, x: 0, y: 0 }}
        animate={
          heroAnimation
            ? { opacity: 1, y: [0, -10, 0, 10, 0] }
            : { opacity: 0, x: -200, y: -200 }
        }
        transition={heroAnimation ? floatTransition : { duration: 1 }}
      />

      {/* Top-right */}
      <motion.img
        src={Note2}
        alt="Note2"
        className="absolute top-0 right-0 w-[33px] h-auto"
        initial={{ opacity: 1, x: 0, y: 0 }}
        animate={
          heroAnimation
            ? { opacity: 1, y: [0, -10, 0, 10, 0] }
            : { opacity: 0, x: 200, y: -200 }
        }
        transition={heroAnimation ? floatTransition : { duration: 1 }}
      />

      {/* Bottom-left */}
      <motion.img
        src={Note1}
        alt="Note1"
        className="absolute bottom-0 left-0 w-[39px] h-auto"
        initial={{ opacity: 1, x: 0, y: 0 }}
        animate={
          heroAnimation
            ? { opacity: 1, y: [0, -10, 0, 10, 0] }
            : { opacity: 0, x: -200, y: 200 }
        }
        transition={heroAnimation ? floatTransition : { duration: 1 }}
      />

      {/* Bottom-right */}
      <motion.img
        src={Micro}
        alt="Micro"
        className="absolute bottom-0 right-0 w-[19px] h-auto"
        initial={{ opacity: 1, x: 0, y: 0 }}
        animate={
          heroAnimation
            ? { opacity: 1, y: [0, -10, 0, 10, 0] }
            : { opacity: 0, x: 200, y: 200 }
        }
        transition={heroAnimation ? floatTransition : { duration: 1 }}
      />
    </div>
  );
};

export default Hero;
