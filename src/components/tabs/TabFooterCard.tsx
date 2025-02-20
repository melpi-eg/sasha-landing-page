import React from "react";

interface TabFooterCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function TabFooterCard({ title, description, icon }: TabFooterCardProps) {
  return (
    <div>
      <div className="flex items-start flex-col gap-4 p-2">
       <span className="bg-[#EEF0FF] rounded-full p-2 text-[#303EB7]">{icon}</span>
        <div>
          <h1 className="font-extrabold text-[22px]">{title}</h1>
          <p className="text-[#9A9A9A]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TabFooterCard;
