import React from "react";
import { Widgets } from "@mui/icons-material";
import Image from "next/image";
import TabFooter from "./TabFooter";

interface TabProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

function Tab({ title, description, icon, url }: TabProps) {
  return (
    <div
      className=" pt-[100px] pl-[50px]"
      style={{ height: "calc(827.5px - 74px)" }}
    >
      {/* top section */}
      <div className="h-[322px]  flex justify-between">
        <div className="w-[49%]  ">
          {icon}
          <h2 className="text-[28px] font-extrabold">{title}</h2>
          <p className="text-[#6A6A6A] text-[20px]">{description}</p>
        </div>
        <div className="w-[49%] flex justify-end relative ">
          {" "}
          <Image
            src={url}
            alt=""
            width={400}
            height={400}
            className="w-full h-full"
          ></Image>
        </div>
      </div>
      {/* bottom section */}
      <TabFooter />
    </div>
  );
}

export default Tab;
