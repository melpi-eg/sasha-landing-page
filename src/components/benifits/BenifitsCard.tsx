import React from "react";

interface BenifitsCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BenifitsCard({ title, description, icon }: BenifitsCardProps) {
  return (
    <div className="">
      <div className="flex items-start flex-col gap-4 p-[24px] w-[428px] rounded-[20px] border h-[257px] " style={{backgroundImage: "linear-gradient(to right, #FBFCFF,#FFFFFF)"}}>
        <span className="bg-[#EEF0FF] rounded-full p-2 text-[#303EB7]">
          {icon}
        </span>
        <div>
          <h1 className="font-extrabold text-[22px] mt-[40px]">{title}</h1>
          <p className="text-[#9A9A9A] mt-[10px]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default BenifitsCard;
