import React, { useContext } from "react";
import Hero from "../components/Hero";
import Slogan from "../components/Slogan";
import Discover from "../components/Discover";
import Jazz from "../components/Jazz";
import { StepContext } from "../context/StepContext";
const Home = () => {
  const { currentStep } = useContext(StepContext);
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Hero />;
      case 2:
        return <Slogan />;
      case 3:
        return <Discover />;
      case 4:
      case 5:
        return (
          <>
            <Discover />
            <Jazz />
          </>
        );
      default:
        return <div>Không tìm thấy bước</div>;
    }
  };
  return <div className="h-full w-full overflow-hidden">{renderStep()}</div>;
};

export default Home;
