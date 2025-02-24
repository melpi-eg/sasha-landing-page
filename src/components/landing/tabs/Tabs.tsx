"use client";
import React, { useState } from "react";
import TabsHeader from "./TabsHeader";
import Tab from "./Tab";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MessageIcon from "@mui/icons-material/Message";
import LocalPlayIcon from "@mui/icons-material/LocalPlay";
import Image from "next/image";

const sections: {
  text: string;
  icon: React.ReactNode;
  description: string;
  url: string;
}[] = [
  {
    text: "Dashboard",
    icon: <WidgetsIcon />,
    description:
      "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
    url: "/landing/tabs/image1.svg",
  },
  {
    text: "User Management",
    icon: <PeopleAltIcon />,
    description:
      "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
    url: "/landing/tabs/image2.svg",
  },
  {
    text: "Document management",
    icon: <InsertDriveFileIcon />,
    description:
      "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
    url: "/landing/tabs/image3.svg",
  },
  {
    text: "Chat & test response",
    icon: <MessageIcon />,
    description:
      "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
    url: "/landing/tabs/image4.svg",
  },
  {
    text: "Ticket history",
    icon: <LocalPlayIcon />,
    description:
      "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
    url: "/landing/tabs/image5.svg",
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="h-[827.5px] w-[80%] bg-[#FFFFFF] m-auto rounded-t-[21.02px]">
      <TabsHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tab
        title={sections[activeTab].text}
        description={sections[activeTab].description}
        icon={sections[activeTab].icon}
        url={sections[activeTab].url}
      />
    </div>
  );
}

export default Tabs;
