import React from "react";

interface CardProps {
  title: string;
  description: string;
  width?: string;
  height?: string;
  JSX: React.ReactNode;
}

function Card({
  title,
  description,
  width = "428px",
  height = "579px",
  JSX,
}: CardProps) {
  return (
    <div className={`border  rounded-[20px] p-4 bg-linear-to-bl`} style={{ width, height,backgroundImage: "linear-gradient(to bottom, #FBFCFF, #FFFFFF)" }}>
      {JSX}
      <div className="">
        <h1 className="font-extrabold text-[22px]">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
