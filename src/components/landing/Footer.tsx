"use client";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="h-[143px] bg-[#1C2468] flex justify-between items-center px-[50px]">
      <motion.div
        className="text-white"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <CopyrightIcon /> 2025 Egsasha.com | All rights reserved.
      </motion.div>
      <motion.div
        className="flex gap-[20px] list-none text-white"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        <li>
          <FacebookIcon />
        </li>
        <li>
          <GitHubIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <YouTubeIcon />
        </li>
      </motion.div>
    </div>
  );
}

export default Footer;
