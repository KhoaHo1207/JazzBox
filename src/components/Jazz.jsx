import React, { useContext } from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { StepContext } from "../context/StepContext";
import { motion, AnimatePresence } from "framer-motion";

const Jazz = () => {
  const { t } = useTranslation();
  const { currentStep } = useContext(StepContext);

  const horizontal = currentStep === 4;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={horizontal ? "horizontal" : "vertical"}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className={`flex ${
          horizontal
            ? "flex-row justify-between mt-64"
            : "flex-col gap-10 mt-16"
        }`}
      >
        {["J", "A", "Z", "Z"].map((letter, index) => (
          <motion.div
            key={letter + index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="flex items-center gap-5"
          >
            <Card text={letter} />
            {!horizontal && (
              <div>
                <p className="text-base font-viprasta text-jazz-gray">
                  {t(`${letter}${letter === "Z" && index === 3 ? "Z1" : "1"}`)}
                </p>
                <p className="text-base font-viprasta text-jazz-gray">
                  {t(`${letter}${letter === "Z" && index === 3 ? "Z2" : "2"}`)}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Jazz;
