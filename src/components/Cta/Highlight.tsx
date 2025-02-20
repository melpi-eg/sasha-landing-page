import React from "react";

function Highlight() {
  return (
    <div className="h-[149px] w-[1000px] bg-[#FDFCFF]  rounded-t-[20px] flex justify-center items-center gap-5 absolute bottom-0">
      <div className=" h-[60px] w-[269px] flex gap-3 items-center">
        <span className="text-[48px] text-[#303EB7] font-bold">30%</span>
        <span>Reduction in agent call volume</span>
      </div>
      <div className=" h-[60px] w-[269px] flex gap-3 items-center">
        <span className="text-[48px] text-[#303EB7] font-bold">
          5<span className="text-[28px]">X</span>
        </span>
        <span>Reduction in agent call volume</span>
      </div>
      <div className=" h-[60px] w-[269px] flex gap-3 items-center">
        <span className="text-[48px] text-[#303EB7] font-bold">24*7</span>
        <span>Reduction in agent call volume</span>
      </div>
    </div>
  );
}

export default Highlight;
