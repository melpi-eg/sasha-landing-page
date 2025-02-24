"use client";
import React from "react";
import { motion } from "framer-motion";

interface TabFooterCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function TabFooterCard({ title, description, icon }: TabFooterCardProps) {
  // Variants for the entire card animation
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Variants for animating individual elements (icon, title, and description)
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Start animation when in view
      className="flex items-start flex-col gap-4 p-2"
      // viewport={{ once: true }} // Trigger animation only once
    >
      {/* Icon */}
      <motion.span
        variants={itemVariants}
        custom={0} // Apply first delay
        className="bg-[#EEF0FF] rounded-full p-2 text-[#303EB7]"
      >
        {icon}
      </motion.span>

      {/* Title and description */}
      <div>
        <motion.h1
          variants={itemVariants}
          custom={1} // Apply second delay (slightly later)
          className="font-bold text-[22px]"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          custom={2} // Apply third delay (slightly later)
          className="text-[#9A9A9A]"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default TabFooterCard;
