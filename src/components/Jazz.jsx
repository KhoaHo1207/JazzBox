import React, { useContext } from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { StepContext } from "../context/StepContext";

const Jazz = () => {
  const { t } = useTranslation();
  const { currentStep } = useContext(StepContext);
  return (
    <>
      {currentStep === 4 ? (
        <div className="flex justify-between mt-64">
          <Card text={"J"} />
          <Card text={"A"} />
          <Card text={"Z"} />
          <Card text={"Z"} />
        </div>
      ) : (
        <div className="h-full flex flex-col justify-start gap-10 mt-20">
          <div className="flex items-center gap-5">
            <Card text={"J"} />
            <span className="text-xl font-viprasta text-jazz-gray">
              {t("J")}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Card text={"A"} />
            <span className="text-xl font-viprasta text-jazz-gray">
              {t("A")}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Card text={"Z"} />
            <span className="text-xl font-viprasta text-jazz-gray">
              {t("Z1")}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Card text={"Z"} />
            <span className="text-xl font-viprasta text-jazz-gray">
              {t("Z2")}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Jazz;
