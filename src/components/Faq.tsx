import React from "react";
import FaqCollapse from "./Faq/FaqCollapser";

const FAQs: { question: string; answer: string }[] = [
  {
    question: "How does SASHA handle escalations?",
    answer:
      "Sasha automatically routes complex issues to the appropriate admin.",
  },
  {
    question: "Can I add multiple documents to a product?",
    answer:
      "Sasha automatically routes complex issues to the appropriate admin.",
  },
  {
    question: "Are the product colors on the website accurate?",
    answer:
      "Sasha automatically routes complex issues to the appropriate admin.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Sasha automatically routes complex issues to the appropriate admin.",
  },
];

function Faq() {
  return (
    <div className=" h-[500px] flex gap-[20px] mt-[40px] w-[1324px] mx-auto">
      <div className=" h-[500px] w-[300px] p-3">
        <h3 className="text-[#1F2977]">FAQ</h3>
        <h2 className="text-[42px] font-extrabold">
          Do you have <span className="text-[#303EB7]">questions?</span>
        </h2>
      </div>
      <div className=" h-[500px] w-[1000px] p-3 flex flex-col gap-[50px] pt-[90px]">
        {FAQs.map((faq, index) => (
          <FaqCollapse question={faq.question} answer={faq.answer} key={index}/>
        ))}{" "}
      </div>
    </div>
  );
}

export default Faq;
