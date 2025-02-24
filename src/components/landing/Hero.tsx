"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import KeyFeatures from "./hero/KeyFeatures";
import ChatCard from "./hero/ChatCard";
import { motion } from "framer-motion";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);

  // Variants for the entire hero container to stagger animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5, // Stagger the children with 0.5 seconds delay
        when: "beforeChildren", // Animate child elements before the parent
      },
    },
  };

  // Variants for individual items
  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.7 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       `  <p className=text-[48px] text-[#313030]>
  //         Experience Fast, Accurate, Multi support
  //         <span className="text-[#303EB7]">Ai chat bot system</span>
  //       </p>`,
  //     ],
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <motion.div
      className="h-[704px] flex items-center justify-between px-[100px] relative"
      style={{ backgroundImage: "url(/landing/hero-background.svg)" }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Left side */}
      <motion.div
        className="w-[757px] h-[200px] self-start mt-[120px] font-bold"
        variants={itemVariants} // Animation applied to the text
      >
        <p className="text-[48px] text-[#313030]">
          Experience Fast, Accurate, Multi support{" "}
          <span className="text-[#303EB7]">Ai chat bot system</span>
        </p>
        {/* <div className="" ref={el}></div> */}
        <p className="text-[#827E7E] w-[75%]">
          Help your customers get instant solutions with AI-generated responses
          24/7 support, zero wait times, with a multi-support system.
        </p>
        <div className="flex gap-5 mt-4">
          <motion.div variants={itemVariants}>
            <Button text="Get Started" icon="ArrowOutward" color="#303EB7" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button
              text="Watch Video"
              icon="PlayCircleFilled"
              color="#fff"
              textColor="#000"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right side (Image + Chat Card) */}
      <motion.div
        className="w-[620px] h-[496px] flex justify-end relative"
        style={{ backgroundImage: "url(/landing/hero-women.png)" }}
        variants={imageVariants} // Animation applied to the image
      >
        <Image
          src={"/landing/hero-women.png"}
          width={511}
          height={496}
          style={{ height: "496px", width: "620px", objectFit: "contain" }}
          alt="Hero Image"
        />
        {/* <motion.div variants={itemVariants}> */}
        <ChatCard />
        {/* </motion.div> */}
      </motion.div>

      {/* KeyFeatures Section */}
      <KeyFeatures />
    </motion.div>
  );
}

export default Hero;
