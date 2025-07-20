import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { StepContext } from "../context/StepContext";
import { motion } from "framer-motion";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Jazz = () => {
  const { t } = useTranslation();
  const { currentStep } = useContext(StepContext);

  const letters = ["J", "A", "Z", "Z"];

  const [flyingIndex, setFlyingIndex] = useState(-1);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    if (currentStep === 5) {
      setIsShrinking(true);
      setFlyingIndex(-1);
      const runAnimation = async () => {
        for (let i = 0; i <= letters.length; i++) {
          setFlyingIndex(i);
          await delay(700);
        }
      };
      runAnimation();
    } else {
      setFlyingIndex(-1);
      setIsShrinking(false);
    }
  }, [currentStep]);

  return (
    <div className="min-h-[350px] relative overflow-visible flex flex-col justify-end">
      {/* Chữ bay lên */}
      {currentStep === 5 && (
        <div className="flex flex-col gap-10 mt-10">
          {letters.map((letter, index) => {
            if (flyingIndex < index) return null;

            return (
              <motion.div
                key={"fly-" + letter + index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="flex items-center gap-5"
                style={{ willChange: "transform, opacity" }}
                layout
              >
                <Card text={letter} />
                <div>
                  <p className="text-lg font-viprasta text-jazz-gray">
                    {t(
                      `${letter}${letter === "Z" && index === 3 ? "Z1" : "1"}`
                    )}
                  </p>
                  <p className="text-lg font-viprasta text-jazz-gray">
                    {t(
                      `${letter}${letter === "Z" && index === 3 ? "Z2" : "2"}`
                    )}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Chữ hàng ngang */}
      {/* {(currentStep === 4 || currentStep === 5) && (
        <motion.div
          className="flex flex-row justify-between mt-10"
          initial={false}
          animate={
            isShrinking
              ? { scale: 0.6, y: 80, opacity: 1 }
              : { scale: 1, y: 0, opacity: 1 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
          layout
        >
          {letters.map((letter, index) => {
            const hidden = flyingIndex >= index;
            return (
              <motion.div
                key={"inline-" + letter + index}
                initial={{ opacity: 1 }}
                animate={{ opacity: hidden ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                style={{ willChange: "opacity" }}
              >
                <Card text={letter} />
              </motion.div>
            );
          })}
        </motion.div>
      )} */}
      {(currentStep === 4 || currentStep === 5) && (
        <motion.div
          className="flex flex-row justify-between mt-10"
          initial={{ opacity: 0, scale: 0.8, y: 30 }} // bắt đầu mờ + nhỏ + lệch xuống
          animate={
            isShrinking
              ? { scale: 0.6, y: 80, opacity: 1 }
              : { scale: 1, y: 0, opacity: 1 }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ willChange: "transform, opacity" }}
          layout
        >
          {letters.map((letter, index) => {
            const hidden = flyingIndex >= index;
            return (
              <motion.div
                key={"inline-" + letter + index}
                initial={{ opacity: 1 }}
                animate={{ opacity: hidden ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                style={{ willChange: "opacity" }}
              >
                <Card text={letter} />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Jazz;
