import React from "react";

const Card = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center border-[1px] border-[#F0AC68] h-[63px] w-[63px] bg-[#FFD4A9] rounded-2xl shrink-0">
      <p className="text-3xl font-vipmontra text-jazz-orange">{text}</p>
    </div>
  );
};

export default Card;
