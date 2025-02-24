"use client";
import React from "react";
import FaqCollapse from "./Faq/FaqCollapser";
import { motion } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

// FAQ Data
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
    <div className="h-[500px] flex gap-[20px] mt-[40px] w-[1324px] max-[1300px]:w-[1200px] max-[1200px]:w-[1100px] mx-auto">
      <motion.div
        className="h-[500px] w-[300px] p-3"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
      >
        <h3 className="text-[#1F2977]">FAQ</h3>
        <h2 className="text-[42px] font-bold">
          {/* <TypingEffect text="Do you have" />{" "} */}
          Do you have <span className="text-[#303EB7]">questions?</span>
        </h2>
      </motion.div>
      <motion.div
        className="h-[500px] w-[1000px] p-3 flex flex-col gap-[50px] pt-[90px]"
        initial="hidden"
        whileInView="visible"
        variants={{
          initial: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* Animate the FAQ items when they are in view */}
        {FAQs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // Start off-screen
            whileInView={{ opacity: 1, y: 0 }} // Animate into view
            viewport={{ amount: 0.2 }} // Trigger when 20% of the element is in view
            transition={{
              delay: index * 0.2, // Staggered delay for each item
              duration: 0.6, // Duration of the animation
              ease: "easeInOut", // Smooth easing
            }}
          >
            <FaqCollapse question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Faq;
