"use client";
import React from "react";
import { motion } from "framer-motion";

function Highlight() {
  return (
    <motion.div
      className="h-[149px] w-[1000px] bg-[#FDFCFF]  rounded-t-[20px] flex justify-center items-center gap-5 absolute bottom-0"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      <div className=" h-[60px] w-[269px] flex gap-3 items-center">
        <span className="text-[48px] text-[#303EB7] font-bold">30%</span>
        <span>Reduction in agent call volume</span>
      </div>
      <div className=" h-[60px] w-[269px] flex gap-3 items-center">
        <span className="text-[48px] text-[#303EB7] font-bold">
          5<span className="text-[28px]">X</span>
        </span>
        <span>Reduction in agent call volume</span>
      </div>
      <div className=" h-[60px] w-[269px] flex gap-3 items-center">
        <span className="text-[48px] text-[#303EB7] font-bold">24*7</span>
        <span>Reduction in agent call volume</span>
      </div>
    </motion.div>
  );
}

export default Highlight;
