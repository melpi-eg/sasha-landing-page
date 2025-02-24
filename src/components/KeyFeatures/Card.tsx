"use client";
import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  width?: string;
  height?: string;
  JSX: React.ReactNode;
}

function Card({
  title,
  description,
  width = "428px",
  height = "579px",
  JSX,
}: CardProps) {
  // Variants for the entire card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Variants for child elements to apply staggered animations
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }, // Title animates after a delay
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }, // Description animates after title
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`border rounded-[20px] p-4 bg-linear-to-bl flex flex-col`}
      style={{
        width,
        height,
        backgroundImage: "linear-gradient(to bottom, #FBFCFF, #FFFFFF)",
      }}
    >
      {/* JSX Content */}
      {/* <motion.div> */}
        {JSX}
      {/* </motion.div> */}

      {/* Title */}
      <motion.h1
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        className="font-bold text-[22px]"
      >
        {title}
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={descriptionVariants}
        initial="hidden"
        whileInView="visible"
        className="text-[16px] text-[#828282]"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default Card;
