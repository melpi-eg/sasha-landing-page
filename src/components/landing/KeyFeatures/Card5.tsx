"use client";
import React from "react";
import { motion } from "framer-motion";

function Card5() {
  return (
    <div className="mx-auto h-[400px] px-[40px]  flex flex-col justify-center ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { x: -100 },
          visible: { x: 40 },
        }}
        transition={{ duration: 0.6 }}
        className="h-[124px] bg-repeat-round   w-[400px] self-start"
        style={{ backgroundImage: "url('/landing/bento4-0.svg')" }}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { x: 100 },
          visible: { x: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="h-[124px] bg-repeat-round   w-[400px] self-end"
        style={{ backgroundImage: "url('/landing/bento4-0.svg')" }}
      ></motion.div>
    </div>
  );
}

export default Card5;
