"use client";
import React from "react";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";

function Navbar() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3, // Apply stagger to child elements (logo, nav items, button)
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="h-[80px] grid place-items-center px-[100px]"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex justify-between items-center w-full h-[48px]">
        {/* Logo Animation */}
        <motion.div
          className="nav-logo"
          variants={itemVariants}
        >
          <Image
            src="/landing/logo.svg"
            width={100}
            height={150}
            alt="Logo"
          />
        </motion.div>

        {/* Navbar Links */}
        <motion.div className="">
          <nav>
            <motion.ul
              className="flex gap-[10px] items-center"
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              <motion.li className="nav-links" variants={itemVariants}>
                <a href="#">Home</a>
              </motion.li>
              <motion.li className="nav-links" variants={itemVariants}>
                <a href="#">Features</a>
              </motion.li>
              <motion.li className="nav-links" variants={itemVariants}>
                <a href="#">Product</a>
              </motion.li>
              <motion.li className="nav-links" variants={itemVariants}>
                <a href="#">Benefits</a>
              </motion.li>
            </motion.ul>
          </nav>
        </motion.div>

        {/* Get Started Button */}
        <motion.div
          className="w-[144px] h-[48px] rounded-[50px] flex justify-center items-center bg-[#303EB7] text-white nav-get-started"
          variants={itemVariants}
        >
          <button>
            Get Started <ArrowOutwardIcon />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Navbar;
