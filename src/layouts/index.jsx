import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";
import { StepContext } from "../context/StepContext";

const Layout = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      <div className="flex flex-col justify-between items-center h-screen bg-primary p-5 pb-16">
        <Navbar />
        <Outlet />
        <Button />
      </div>
    </StepContext.Provider>
  );
};

export default Layout;
