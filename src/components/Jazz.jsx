import React from "react";
import Card from "./Card";

const Jazz = () => {
  const Text = ["J", "A", "Z", "Z"];
  return (
    // <div className="flex justify-between mt-64">
    //   {Text.map((text, index) => (
    //     <Card key={index} text={text} />
    //   ))}
    // </div>
    <div className="h-full flex flex-col justify-start gap-10 mt-20">
      {Text.map((text, index) => (
        <Card key={index} text={text} />
      ))}
    </div>
  );
};

export default Jazz;
