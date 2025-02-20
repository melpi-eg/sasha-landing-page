import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="h-[143px] bg-[#1C2468] flex justify-between items-center px-[50px]">
      <div className="text-white">
        <CopyrightIcon /> 2025 Egsasha.com | All rights reserved.
      </div>
      <div className="flex gap-[20px] list-none text-white">
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
      </div>
    </div>
  );
}

export default Footer;
