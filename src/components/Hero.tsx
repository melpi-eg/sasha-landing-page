import React from "react";
import Image from "next/image";
import Button from "./Button";
import KeyFeatures from "./hero/KeyFeatures";
import ChatCard from "./hero/ChatCard";

function Hero() {
  return (
    <div
      className="h-[704px] flex items-center justify-between px-[100px] relative"
      style={{ backgroundImage: "url(/landing/hero-background.svg)" }}
    >
      {/* left side */}
      <div className="w-[757px] h-[200px] self-start mt-[120px] font-extrabold">
        <p className="text-[48px]  text-[#313030] ">
          Experience Fast, Accurate, Multi support{" "}
          <span className="text-[#303EB7]">Ai chat bot system</span>
        </p>
        <p className="text-[#827E7E] w-[75%] ">
          Help you customers get instant solutions with AI-generated responses
          24/7 support, zero wait times, with multi-support system.
        </p>
        <div className="flex gap-5 mt-4">
          <Button text="Get Started" icon="ArrowOutward" color="#303EB7" />
          <Button
            text="Get Started"
            icon="PlayCircleFilled"
            color="#fff"
            textColor="#000"
          />
        </div>
      </div>
      {/* right side */}
      <div
        className="w-[620px] h-[496px] flex justify-end relative"
        style={{ backgroundImage: "url(/landing/hero-women.png)" }}
      >
        <Image
          src={"/landing/hero-women.png"}
          width={511}
          height={496}
          style={{ height: "496px", width: "620px", objectFit: "cover" }}
          alt=""
        ></Image>
        <ChatCard />
      </div>
      <KeyFeatures />
    </div>
  );
}

export default Hero;
