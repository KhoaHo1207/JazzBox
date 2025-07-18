import React from "react";
import JazzBoxLogo from "../assets/images/Logo chính 3.png";
import Saxophone from "../assets/images/Saxophone.png";
import Micro from "../assets/images/Micro.png";
import Note1 from "../assets/images/1.png";
import Note2 from "../assets/images/2.png";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img src={JazzBoxLogo} alt="Jazz Box Logo" className="w-[250px]" />
    </div>
  );
};

export default Hero;
