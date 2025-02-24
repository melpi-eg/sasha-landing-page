"use client";
import React from "react";
import { motion } from "framer-motion";

interface BenifitsCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BenifitsCard({ title, description, icon }: BenifitsCardProps) {
  const itemVariants = {
    initial: "hidden",
    whileInView: "visible",
    transition: { duration: 1 },
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    // viewport: { once: true },
  };

  return (
    <div className="">
      <motion.div
        {...itemVariants}
        // whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        // viewport={{ }}
        className="flex items-start flex-col gap-4 p-[24px] w-[428px] h-[257px] max-[1300px]:w-[400px] max-[1300px]:h-[300px] max-[1200px]:w-[320px] max-[1200px]:h-[350px] rounded-[20px] border  "
        style={{
          backgroundImage: "linear-gradient(to right, #FBFCFF,#FFFFFF)",
        }}
      >
        <span className="bg-[#EEF0FF] rounded-full p-2 text-[#303EB7]">
          {icon}
        </span>
        <div>
          <motion.h1
            className="font-bold text-[22px] mt-[40px]"
            {...itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p className="text-[#9A9A9A] mt-[10px]" {...itemVariants}>
            {description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default BenifitsCard;
