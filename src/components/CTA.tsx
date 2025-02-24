"use client";
import React from "react";
import Button from "./Button";
import Highlight from "./Cta/Highlight";
import { motion } from "framer-motion";

function CTA() {
  return (
    <div
      className="mx-auto  h-[545px] mt-[150px] w-[1324px] rounded-[20px] flex items-center pt-[40px] flex-col relative "
      style={{
        // background:
        //   "radial-gradient(19deg, #6159C0, #30387D, #415EB5, #1E2564, #232E89)",
        backgroundImage: "url(/landing/CTA/background.svg)",
      }}
    >
      <div className="w-[700px]">
        <div className="flex-col justify-center items-center gap-[18px] inline-flex">
          <motion.div
            className="self-stretch  text-center"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white text-5xl font-medium font-['Helvetica Neue'] capitalize leading-[57.60px]">
              Experience Fast, Accurate, Multi support{" "}
            </span>
            <span className="text-[#ebebf0] text-5xl font-medium font-['Helvetica Neue'] capitalize leading-[57.60px]">
              Ai chat bot system
            </span>
          </motion.div>
          <motion.div
            className="w-[582px] text-center text-[#bbb1ff] text-base font-normal font-['Helvetica Neue'] leading-snug"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Businesses struggle to make sense of vast amounts of complex data,
            missing out on valuable insights that could drive growth and
            innovation.{" "}
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            <Button
              text="Get Started"
              icon="ArrowOutward"
              color="#E1E4FF"
              textColor="#303EB7"
            />
          </motion.div>
        </div>
      </div>
      <Highlight />
    </div>
  );
}

export default CTA;
