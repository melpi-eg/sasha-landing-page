import React from "react";
import Image from "next/image";

interface EachChatProps {
  type: "human" | "bot";
  text: string;
}

function EachChat({ type, text }: EachChatProps) {
  return (
    <div
      className={`min-h-[60px] min-w-[100px] bg-[${
        type == "human" ? "#FFFFFF" : "#3445D7"
      }] rounded-[14px] p-3 relative ${type == "human" ? "text-black" : ""}`}
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
    </div>
  );
}

export default EachChat;
