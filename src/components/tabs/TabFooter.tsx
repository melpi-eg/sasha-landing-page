import React from "react";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";
import TabFooterCard from "./TabFooterCard";

const sections: {
  title: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Increases Efficiency",
    description:
      "Automates responses to common queries, reducing human intervention and speeding up resolutions.",
    icon: <FlashOnIcon />,
  },
  {
    title: "Increases Efficiency",
    description:
      "Automates responses to common queries, reducing human intervention and speeding up resolutions.",
    icon: <AttachMoneyIcon />,
  },
  {
    title: "Increases Efficiency",
    description:
      "Automates responses to common queries, reducing human intervention and speeding up resolutions.",
    icon: <StarIcon />,
  },
];

function TabFooter() {
  return (
    <div className="mt-10  h-[290px] flex items-center justify-between">
      {sections.map((item, index) => (
        <TabFooterCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default TabFooter;
