import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import { StepContext } from "../context/StepContext";

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(5);
  const [heroAnimation, setHeroAnimation] = useState(true);

  const handleNextStep = () => {
    switch (currentStep) {
      case 1:
        setHeroAnimation(false);
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        setCurrentStep((prev) => prev + 1);
        break;
      default:
        break;
    }
  };
  return (
    <StepContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        heroAnimation,
        setHeroAnimation,
      }}
    >
      <div className="flex flex-col justify-between items-center h-[100dvh] max-h-screen overflow-hidden bg-primary px-4 sm:px-6 md:px-10 relative pb-10">
        <div className="w-full max-w-screen-xl flex-grow overflow-hidden">
          <Navbar />
          {/* Outlet should scroll internally if needed */}
          <div className="overflow-auto h-full" onClick={handleNextStep}>
            <Outlet />
          </div>
        </div>

        {/* Button fixed to bottom center */}
        {currentStep !== 6 && (
          // <div className="fixed bottom-14 left-1/2 -translate-x-1/2 z-50">
          <div className="">
            <Button />
          </div>
        )}
      </div>
    </StepContext.Provider>
  );
};

export default Layout;
