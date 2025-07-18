import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StepContext } from "../context/StepContext";
const Button = () => {
  const { t } = useTranslation();

  const { setCurrentStep } = useContext(StepContext);
  return (
    <button
      className="font-viprasta text-xl text-jazz-orange"
      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
      onClick={() => setCurrentStep((prev) => prev + 1)}
    >
      {t("Action")}
    </button>
  );
};

export default Button;
