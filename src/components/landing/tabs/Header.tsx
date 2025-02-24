import React from "react";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

function Header() {
  return (
    <div className="h-[250px]  pt-8 flex justify-start items-center flex-col font-bold">
      <p className="flex items-center gap-2">
        <ContactEmergencyIcon sx={{ color: "#303EB7" }} />{" "}
        <span className="text-[#1F2977]">Admin Panel</span>{" "}
      </p>
      <div>
        {" "}
        <p className="text-[48px] font-[500] text-[#313030] w-[1000px] text-center">
          Experience Fast, Accurate, Multi support{" "}
          <span className="text-[#303EB7]">Ai chat bot system</span>
        </p>
      </div>
    </div>
  );
}

export default Header;
