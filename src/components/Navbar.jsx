import React from "react";
import Sidebar from "../components/Sidebar";
import Language from "../components/Language";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full px-4 py-3 flex items-center justify-between text-jazz-skin bg-transparent z-50"
    >
      <Sidebar />
      <Language />
    </motion.header>
  );
};

export default Navbar;
