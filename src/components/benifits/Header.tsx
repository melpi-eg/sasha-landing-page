import React from "react";

function Header() {
  return (
    <div className="h-[300px]  pt-8 flex justify-start items-center flex-col font-extrabold">
      <p className="flex items-center gap-2">
        <span className="text-[#1F2977]">Benifits</span>{" "}
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
