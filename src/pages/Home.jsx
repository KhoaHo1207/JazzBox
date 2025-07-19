import React, { useContext } from "react";
import Hero from "../components/Hero";
import Slogan from "../components/Slogan";
import Discover from "../components/Discover";
import Jazz from "../components/Jazz";
import Final from "../components/Final";
import { StepContext } from "../context/StepContext";
import { AnimatePresence } from "framer-motion";
const Home = () => {
  const { currentStep } = useContext(StepContext);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Hero />;
      case 2:
        return <Slogan key="slogan" />;
      case 3:
        return <Discover currentStep={currentStep} />;
      case 4:
      case 5:
        return (
          <>
            <Discover />
            <Jazz />
          </>
        );
      case 6:
        return <Final />;
      default:
        return <div>Không tìm thấy bước</div>;
    }
  };

  return (
    <div className="h-full w-full overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-screen-xl mx-auto">
      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
    </div>
  );
};

export default Home;
