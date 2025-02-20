import React from "react";
import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';



function Navbar() {
  return (
    <div className=" h-[80px] grid place-items-center px-[100px]">
      <div className="flex justify-between items-center w-full  h-[48px]">
        <div className="">
          <Image
            src="/landing/logo.svg"
            width={100}
            height={150}
            alt=""
          ></Image>
        </div>
        <div className="">
          <nav>
            <ul className="flex gap-[10px] items-center">
              <li className="">
                <a href="#">Home</a>
              </li>
              <li className="">
                <a href="#">Features</a>
              </li>
              <li className="">
                <a href="#">Product</a>
              </li>
              <li className="">
                <a href="#">Benefits</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-[144px] h-[48px] rounded-[50px] flex justify-center items-center bg-[#303EB7] text-white"><button>Get Started <ArrowOutwardIcon/></button></div>
      </div>
    </div>
  );
}

export default Navbar;
