// import React, { useContext } from "react";
// import Card from "./Card";
// import { useTranslation } from "react-i18next";
// import { StepContext } from "../context/StepContext";
// import { motion, AnimatePresence } from "framer-motion";

// const Jazz = () => {
//   const { t } = useTranslation();
//   const { currentStep } = useContext(StepContext);

//   const horizontal = currentStep === 4;

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={horizontal ? "horizontal" : "vertical"}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.5 }}
//         className={`flex ${
//           horizontal
//             ? "flex-row justify-between mt-64"
//             : "flex-col gap-10 mt-16"
//         }`}
//       >
//         {["J", "A", "Z", "Z"].map((letter, index) => (
//           <motion.div
//             key={letter + index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 * index, duration: 0.5 }}
//             className="flex items-center gap-5"
//           >
//             <Card text={letter} />
//             {!horizontal && (
//               <div>
//                 <p className="text-base font-viprasta text-jazz-gray">
//                   {t(`${letter}${letter === "Z" && index === 3 ? "Z1" : "1"}`)}
//                 </p>
//                 <p className="text-base font-viprasta text-jazz-gray">
//                   {t(`${letter}${letter === "Z" && index === 3 ? "Z2" : "2"}`)}
//                 </p>
//               </div>
//             )}
//           </motion.div>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Jazz;

// import React, { useContext } from "react";
// import Card from "./Card";
// import { useTranslation } from "react-i18next";
// import { StepContext } from "../context/StepContext";
// import { motion, AnimatePresence } from "framer-motion";

// const Jazz = () => {
//   const { t } = useTranslation();
//   const { currentStep } = useContext(StepContext);

//   const isHorizontal = currentStep === 4;

//   const letters = ["J", "A", "Z", "Z"];

//   return (
//     <div className="min-h-[300px] relative">
//       <AnimatePresence mode="wait">
//         {isHorizontal && (
//           <motion.div
//             key="horizontal"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-row justify-between mt-64"
//           >
//             {letters.map((letter, index) => (
//               <motion.div
//                 key={`horizontal-${letter}-${index}`}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -50 }}
//                 transition={{
//                   delay: index * 0.3,
//                   duration: 0.4,
//                 }}
//                 className="flex flex-col items-center"
//               >
//                 <Card text={letter} />
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         {!isHorizontal && (
//           <motion.div
//             key="vertical"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ staggerChildren: 0.2 }}
//             className="flex flex-col gap-10 mt-16"
//           >
//             {letters.map((letter, index) => (
//               <motion.div
//                 key={`vertical-${letter}-${index}`}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.5, duration: 0.5 }}
//                 className="flex items-center gap-5"
//               >
//                 <Card text={letter} />
//                 <div>
//                   <p className="text-base font-viprasta text-jazz-gray">
//                     {t(
//                       `${letter}${letter === "Z" && index === 3 ? "Z1" : "1"}`
//                     )}
//                   </p>
//                   <p className="text-base font-viprasta text-jazz-gray">
//                     {t(
//                       `${letter}${letter === "Z" && index === 3 ? "Z2" : "2"}`
//                     )}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Jazz;

import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { StepContext } from "../context/StepContext";
import { motion, AnimatePresence } from "framer-motion";

const Jazz = () => {
  const { t } = useTranslation();
  const { currentStep } = useContext(StepContext);

  const letters = ["J", "A", "Z", "Z"];

  // State quản lý chữ nào đang bay lên
  const [flyingIndex, setFlyingIndex] = useState(-1);

  // Khi vào step 5, từng chữ bay lên theo thứ tự
  useEffect(() => {
    if (currentStep === 5) {
      let i = 0;
      setFlyingIndex(-1);
      const interval = setInterval(() => {
        setFlyingIndex(i);
        i++;
        if (i > letters.length) {
          clearInterval(interval);
        }
      }, 700);
      return () => clearInterval(interval);
    } else {
      setFlyingIndex(-1);
    }
  }, [currentStep]);

  return (
    <div className="min-h-[300px] relative">
      {/* Step 4: Hàng ngang bình thường */}
      {currentStep === 4 && (
        <div className="flex flex-row justify-between mt-64">
          {letters.map((letter, index) => (
            <Card key={letter + index} text={letter} />
          ))}
        </div>
      )}

      {/* Step 5: Hiệu ứng chữ bay lên */}
      {currentStep === 5 && (
        <div className="relative h-[300px]">
          {/* Chữ còn lại vẫn nằm ngang phía dưới */}
          <div className="flex flex-row justify-between mt-64 absolute bottom-0 left-0 right-0">
            {letters.map((letter, index) => {
              // Nếu chữ này đang bay lên hoặc đã bay lên (flyingIndex >= index) thì ẩn chữ nằm ngang
              const hidden = flyingIndex >= index;
              return (
                <motion.div
                  key={"under-" + letter + index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: hidden ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {!hidden && <Card text={letter} />}
                </motion.div>
              );
            })}
          </div>

          {/* Các chữ bay lên từng cái */}
          <div className="flex flex-col gap-10 mt-10 ml-4">
            {letters.map((letter, index) => {
              const isFlying = flyingIndex === index;
              const isAlreadyFlown = flyingIndex > index;

              // Nếu chưa đến chữ này thì không hiển thị bay lên
              if (flyingIndex < index) return null;

              return (
                <motion.div
                  key={"fly-" + letter + index}
                  initial={{ opacity: 0, y: 100, x: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    x: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="flex items-center gap-5"
                >
                  <Card text={letter} />
                  <div>
                    <p className="text-base font-viprasta text-jazz-gray">
                      {t(
                        `${letter}${letter === "Z" && index === 3 ? "Z1" : "1"}`
                      )}
                    </p>
                    <p className="text-base font-viprasta text-jazz-gray">
                      {t(
                        `${letter}${letter === "Z" && index === 3 ? "Z2" : "2"}`
                      )}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jazz;
