"use client";
import React from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";

interface EachChatProps {
  type: "human" | "bot";
  text: string;
  width?: string;
  index: number;
}

function EachChat({ type, text, width = "", index }: EachChatProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 1.5 * (index + 1) },
        },
      }}
      className={`min-h-[60px] border w-fit  rounded-[14px] p-2 relative ${
        type == "human" ? "text-black" : ""
      }`}
      style={{
        backgroundColor: type == "human" ? "#FFFFFF" : "#3445D7",
        width: width,
        alignSelf: index % 2 == 0 ? "flex-end" : "flex-start",
      }}
      transition={{ duration: 0.5 }}
    >
      <span
        className={`h-[25px] w-[25px] rounded-full p absolute  ${
          type == "bot" ? "-left-2" : "-right-2"
        } -top-2 bg-white grid place-items-center`}
      >
        {type == "human" ? (
          <Image
            src={"/landing/hero-women.png"}
            width={25}
            height={25}
            alt=""
          ></Image>
        ) : (
          <Image src={"/landing/bot.svg"} width={20} height={20} alt=""></Image>
        )}
      </span>
      <span
        className={`text-[12px] ${type == "bot" ? "text-white" : "text-black"}`}
      >
        {text}
      </span>
    </motion.div>
  );
}

export default EachChat;
