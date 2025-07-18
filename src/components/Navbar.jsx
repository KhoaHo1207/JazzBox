import React from "react";
import Language from "../components/Language";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex items-center justify-end bg-transparent z-50"
    >
      <Language />
    </motion.header>
  );
};

export default Navbar;
