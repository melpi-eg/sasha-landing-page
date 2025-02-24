"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LanguageIcon from "@mui/icons-material/Language";

function Card3() {
  return (
    <div className="h-[436px] mx-auto">
      <motion.div className="h-[340px] w-[340px] rounded-full border grid place-items-center relative">
        <Image
          src="/landing/keyFeatures/outer1.svg"
          height={100}
          width={100}
          alt=""
          className="absolute top-0 left-0"
        ></Image>
        <Image
          src="/landing/keyFeatures/outer2.svg"
          height={100}
          width={100}
          alt=""
          className="absolute top-0 right-0"
        ></Image>
        <motion.div
          className="h-[220px] w-[220px] rounded-full border grid place-items-center relative"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { rotate: 0 },
            visible: { rotate: 360 },
          }}
        //   animate={{ rotate: 360 }}
          transition={{ duration: 4 }}
        >
          <Image
            src="/landing/keyFeatures/inner1.svg"
            height={100}
            width={100}
            alt=""
            className="absolute top-[60px] -left-[50px]"
          ></Image>
          <Image
            src="/landing/keyFeatures/inner2.svg"
            height={100}
            width={100}
            alt=""
            className="absolute -top-[40px] left-[27%]"
          ></Image>
          <Image
            src="/landing/keyFeatures/inner3.svg"
            height={100}
            width={100}
            alt=""
            className="absolute top-[60px] -right-[50px]"
          ></Image>
          <div className="h-[124px] w-[124px] rounded-full border grid place-items-center">
            <div className="h-[80px] w-[80px] rounded-full border grid place-items-center bg-[#3445D7]">
              <LanguageIcon style={{ color: "white", fontSize: "40px" }} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Card3;
