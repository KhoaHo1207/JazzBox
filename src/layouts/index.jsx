import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import { StepContext } from "../context/StepContext";

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      <div className="flex flex-col justify-between items-center max-h-screen h-screen bg-primary px-4 sm:px-6 md:px-10 pb-20">
        <div className="w-full max-w-screen-xl">
          <Navbar />
          <Outlet />
        </div>
        {/* <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50"> */}
        {currentStep !== 6 && <Button />}
      </div>
    </StepContext.Provider>
  );
};

export default Layout;
