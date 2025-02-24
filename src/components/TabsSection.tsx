import React from "react";
import Header from "./tabs/Header";
import Tabs from "./tabs/Tabs";

function TabsSection() {
  return (
    <div className="h-[1159px] w-[100vw] bg-[#F8F8FF] mx-auto">
      <Header />
      <Tabs />
    </div>
  );
}

export default TabsSection;
