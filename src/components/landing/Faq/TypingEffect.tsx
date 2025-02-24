"use client";
import { motion } from "framer-motion";

const TypingEffect = ({ text }: { text: string }) => {
  const splitText = text.split(" "); // Split the text into an array of characters
  return (
    <div className="flex flex-wrap">
      {splitText.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.1, // Delay for each character to create the typing effect
            duration: 0.1, // Duration for each character to appear
            // ease: "ease-in-out", // Easing for smooth animation
          }}
        >
          {char.concat(" ")}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingEffect;
