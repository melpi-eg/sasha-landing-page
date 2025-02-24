"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Card4() {
  return (
    <div className="h-[436px] flex items-center justify-center gap-4">
      {" "}
      <motion.div
        className="w-[344.38px] h-[226px] rounded-[12px] border"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1 }}
      >
        <div className="h-[43px] w-full rounded-t-[12px] bg-[#3445D7] p-2">
          <span className="text-white text-[14px]">Chat summary</span>
        </div>
        <div className="text-[12px] text-[#797979] p-2">
          “Hi Sarah! Need help organizing your tasks more efficiently?”
          Intrigued, she asks if TaskFlow can integrate with Google Calendar.
          The chatbot responds, “Yes! TaskFlow syncs with Google Calendar,
          Slack, and other tools to streamline your workflow.” Sarah then
          inquires about pricing and
        </div>
      </motion.div>
      <div
        className="h-[5px] w-[100px]"
        style={{
          backgroundImage: "linear-gradient(to right, #303EB7, #FFFFFF)",
        }}
      ></div>
      <motion.div
        className=""
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: 70 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/landing/keyFeatures/card4-icon.svg"
          alt=""
          width={100}
          height={100}
        ></Image>
      </motion.div>
    </div>
  );
}

export default Card4;
