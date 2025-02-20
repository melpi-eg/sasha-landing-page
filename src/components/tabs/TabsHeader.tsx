import React from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MessageIcon from "@mui/icons-material/Message";
import LocalPlayIcon from "@mui/icons-material/LocalPlay";

const tabs: {
  text: string;
  icon: React.ReactNode;
}[] = [
  {
    text: "Dashboard",
    icon: <WidgetsIcon />,
  },
  {
    text: "User Management",
    icon: <PeopleAltIcon />,
  },
  {
    text: "Document management",
    icon: <InsertDriveFileIcon />,
  },
  {
    text: "Chat & test response",
    icon: <MessageIcon />,
  },
  {
    text: "Ticket history",
    icon: <LocalPlayIcon />,
  },
];

function TabsHeader({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      className="h-[74px] rounded-t-[21.02px] flex items-center justify-between gap-5 px-[40px]"
      style={{
        backgroundImage: "linear-gradient(to right, #383272, #675DD4,#383373)",
      }}
    >
      {/* TabsHeader */}
      {tabs.map((item, index) => (
        <div
          key={index}
          className={`h-[74px] flex items-center justify-center gap-2 ${
            activeTab == index ? " border-b-white rounded-[5px]" : ""
          } cursor-pointer relative`}
          onClick={() => setActiveTab(index)}
        >
          <span className="text-white">{item.icon}</span>
          <span className="text-white">{item.text}</span>
          {index == activeTab && (
            <div className="w-full h-[10px] bg-white absolute bottom-0 rounded-t-[10px]"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TabsHeader;
