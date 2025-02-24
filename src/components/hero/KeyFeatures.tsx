"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function KeyFeatures() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 30) return;
    const interval = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 50);
  }, [count]);
  // Variants for the parent container to handle staggered children animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1, // Total duration for the entire container
        staggerChildren: 0.5, // Delay between each block's animation (timeline effect)
        when: "beforeChildren", // Children animate after parent starts
      },
    },
  };

  // Variants for the individual blocks (30%, 5X, 24*7)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Individual item animations
  };

  return (
    <motion.div
      className="h-[149px] w-[1000px] bg-[#FDFCFF] rounded-tl-[20px] flex justify-center items-center gap-5 absolute right-0 bottom-0"
      variants={containerVariants} // Apply container animation for staggered timeline
      initial="initial"
      animate="animate"
    >
      {/* Feature Block 1: 30% */}
      <motion.div
        variants={itemVariants} // Apply staggered animation to this block
        className="h-[60px] w-[269px] flex gap-3 items-center"
      >
        <span className="text-[48px] text-[#303EB7] font-bold">{count}%</span>
        <span>Reduction in agent call volume</span>
      </motion.div>

      {/* Feature Block 2: 5X */}
      <motion.div
        variants={itemVariants} // Apply staggered animation to this block
        className="h-[60px] w-[269px] flex gap-3 items-center"
      >
        <span className="text-[48px] text-[#303EB7] font-bold">
          5<span className="text-[28px]">X</span>
        </span>
        <span>Reduction in agent call volume</span>
      </motion.div>

      {/* Feature Block 3: 24*7 */}
      <motion.div
        variants={itemVariants} // Apply staggered animation to this block
        className="h-[60px] w-[269px] flex gap-3 items-center"
      >
        <span className="text-[48px] text-[#303EB7] font-bold">24*7</span>
        <span>Reduction in agent call volume</span>
      </motion.div>
    </motion.div>
  );
}

export default KeyFeatures;
