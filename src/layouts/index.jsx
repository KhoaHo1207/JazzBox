import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import { StepContext } from "../context/StepContext";

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      <div className="flex flex-col justify-between items-center h-screen max-h-screen overflow-hidden bg-primary px-4 sm:px-6 md:px-10 relative">
        <div className="w-full max-w-screen-xl flex-grow overflow-hidden">
          <Navbar />
          {/* Outlet should scroll internally if needed */}
          <div className="overflow-auto h-full">
            <Outlet />
          </div>
        </div>

        {/* Button fixed to bottom center */}
        {currentStep !== 6 && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
            <Button />
          </div>
        )}
      </div>
    </StepContext.Provider>
  );
};

export default Layout;
