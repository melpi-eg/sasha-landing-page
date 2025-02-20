import React from "react";
import EachChat from "./EachChat";
import Image from "next/image";

function ChatCard() {
  return (
    <div className="h-[228px] w-[270px]  absolute bottom-[170px] left-[-130px] flex flex-col gap-3 p-2">
      {/* <EachChat type="human" text="Hi Allena " />
      <EachChat type="bot" text="Help your customers " />
      <EachChat
        type="human"
        text="Help your customers get instant  with AI-generated responses
"
      /> */}
      <Image src="/landing/bento0.svg" alt="" width={270} height={228}></Image>
    </div>
  );
}

export default ChatCard;
