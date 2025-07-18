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
        <div className="h-full flex flex-col justify-start gap-10 mt-16">
          <div className="flex items-center gap-5">
            <Card text={"J"} />
            <div>
              <p className="text-base font-viprasta text-jazz-gray">
                {t("J1")}
              </p>
              <p className="text-base font-viprasta text-jazz-gray">
                {t("J2")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Card text={"A"} />
            <div>
              <p className="text-base font-viprasta text-jazz-gray">
                {t("A1")}
              </p>
              <p className="text-base font-viprasta text-jazz-gray">
                {t("A2")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Card text={"Z"} />
            <div>
              <p className="text-base font-viprasta text-jazz-gray">
                {t("Z1")}
              </p>
              <p className="text-base font-viprasta text-jazz-gray">
                {t("Z2")}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Card text={"Z"} />
            <div>
              <p className="text-base font-viprasta text-jazz-gray">
                {t("ZZ1")}
              </p>
              <p className="text-base font-viprasta text-jazz-gray">
                {t("ZZ2")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Jazz;
