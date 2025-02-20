import React from "react";
import Header from "./KeyFeatures/Header";
import KeyFeatureCard from "./KeyFeatures/Card";
import { title } from "process";
import Image from "next/image";
import EachChat from "./hero/EachChat";

const cards: {
  title: string;
  description: string;
  JSX?: React.ReactNode;
}[] = [
  {
    title: "AI Chat Bot",
    description:
      "Uses advanced NLP and machine learning to understand and respond to user queries effectively.",
  },
  {
    title: "Multi-Mode Assistance",
    description:
      "Enables redirection to calls, emails, or live chat when needed.",
  },
  {
    title: "Multi lingual support",
    description:
      "Automatically routes complex issues to the appropriate human support team with full context.",
  },
  {
    title: "Escalation to human support when needed",
    description:
      "Automatically routes complex issues to the appropriate human support team with full context.",
  },
  {
    title: "Ticket management system",
    description:
      "Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.",
  },
];

function KeyFeatures() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-stretch gap-5 flex-wrap w-full pb-5">
        {cards.map((item, index) => {
          if (index == 3 || index == 4) {
            return (
              <KeyFeatureCard
                title={item.title}
                description={item.description}
                width="652px"
                JSX={
                  item.JSX ? (
                    item.JSX
                  ) : (
                    <>
                      <Image
                        src={`/landing/bento${index}.svg`}
                        alt=""
                        width={652}
                        height={579}
                        style={{ width: "100%", height: "80%" }}
                        className="w-full"
                      ></Image>
                    </>
                  )
                }
                key={index}
              />
            );
          }
          return (
            <KeyFeatureCard
              title={item.title}
              description={item.description}
              JSX={
                item.JSX ? (
                  item.JSX
                ) : (
                  <>
                    <Image
                      src={`/landing/bento${index}.svg`}
                      alt=""
                      width={652}
                      height={579}
                      style={{ width: "100%", height: "80%" }}
                      className="w-full"
                    ></Image>
                  </>
                )
              }
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default KeyFeatures;
