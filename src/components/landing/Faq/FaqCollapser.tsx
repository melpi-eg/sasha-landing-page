"use client";
import { useState } from "react";

interface FaqCollapseProps {
  question: string;
  answer: string;
}

const FaqCollapse = ({ question, answer }: FaqCollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300 py-4  duration-300 ease-in ">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleCollapse}
      >
        <h2 className="text-lg font-medium text-[#1C1C1C]">{question}</h2>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 9.793l5.646-5.147a.5.5 0 0 1 .708.707l-6 5.5a.5.5 0 0 1-.708 0l-6-5.5a.5.5 0 0 1 0-.707z" />
          </svg>
        </span>
      </div>
      {isOpen && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

export default FaqCollapse;
