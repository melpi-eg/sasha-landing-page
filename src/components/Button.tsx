"use client";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const icons: any = {
  ArrowOutward: <ArrowOutwardIcon />,
  PlayCircleFilled: <PlayCircleFilledIcon />,
};

function Button({
  text,
  icon,
  color,
  textColor = "white",
}: {
  text: string;
  icon: string;
  color: string;
  textColor?: string;
}) {
  return (
    <div
      className={`w-[144px] h-[48px] rounded-[50px] flex justify-center items-center bg-[${color}] text-${textColor} `}
      style={{ backgroundColor: color, color: textColor }}
    >
      <button>
        {text} {icons[icon]}
      </button>
    </div>
  );
}

export default Button;
