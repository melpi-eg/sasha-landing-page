"use client";
import React from "react";
import { motion } from "framer-motion";
import { Widgets } from "@mui/icons-material";
import Image from "next/image";
import TabFooter from "./TabFooter";

interface TabProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

function Tab({ title, description, icon, url }: TabProps) {
  // Variants for the top section
  const topSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Variants for the icon, title, and description
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2, // Sequential delay based on element index
      },
    }),
  };

  // Bottom section animation for TabFooter
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5 }, // Start slightly after the top section
    },
  };

  return (
    <motion.div
      className="pt-[100px] pl-[50px]"
      style={{ height: "calc(827.5px - 74px)" }}
      initial="hidden"
      whileInView="visible"
      variants={topSectionVariants}
      viewport={{ once: true }} // Trigger animation only once when in view
    >
      {/* top section */}
      <motion.div
        className="h-[322px] flex justify-between"
        variants={topSectionVariants}
        whileInView="visible" // Ensure top section animates when in view
        viewport={{ once: true }} // Trigger animation only once when in view
      >
        <div className="w-[49%]">
          <motion.div variants={itemVariants} custom={0}>
            {icon}
          </motion.div>
          <motion.h2
            variants={itemVariants}
            custom={1} // Delay for the title
            className="text-[28px] font-bold"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            custom={2} // Delay for the description
            className="text-[#6A6A6A] text-[20px]"
          >
            {description}
          </motion.p>
        </div>
        <div className="w-[49%] flex justify-end relative">
          <Image
            src={url}
            alt=""
            width={400}
            height={400}
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* bottom section */}
      <motion.div
        variants={footerVariants}
        whileInView="visible"
        viewport={{ once: true }} // Trigger only when this section comes into view
      >
        <TabFooter />
      </motion.div>
    </motion.div>
  );
}

export default Tab;
