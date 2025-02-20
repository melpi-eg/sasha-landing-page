import React from "react";
import BenifitsCard from "./BenifitsCard";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StarIcon from "@mui/icons-material/Star";

const benifits: {
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
    title: "Cost Efficiency",
    description:
      "Lowers operational expenses by reducing reliance on live agents for repetitive requests.",
    icon: <AttachMoneyIcon />,
  },
  {
    title: "Improved Customer Experience",
    description:
      "Delivers real-time, accurate, and human-like responses, ensuring consistent service quality through historical data and knowledge articles.",
    icon: <StarIcon />,
  },
];

function BenifitsSection() {
  return (
    <div className="flex justify-center gap-[15px]">
      {benifits.map((item, index) => (
        <BenifitsCard
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

export default BenifitsSection;
