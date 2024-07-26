import { BookOpen, Box, Film, LucideIcon } from "lucide-react";
import React from "react";

interface Feature {
  id: string;
  boxColor: string;
  iconColor: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: "1",
    boxColor: "#FFE7F2",
    iconColor: "#FF75B7",
    icon: Box,
    title: "Comprehensive Categories",
    description:
      "Explore a variety of quiz topics, from general knowledge to specialized subjects. There’s something for everyone.",
  },
  {
    id: "2",
    boxColor: "#E5F0FF",
    iconColor: "#5E9DFF",
    icon: BookOpen,
    title: "Detailed Explanations",
    description:
      "Get in-depth explanations for each question to enhance your learning and understanding.",
  },
  {
    id: "3",
    boxColor: "#E2FFF2",
    iconColor: "#2DFF9C",
    icon: Film,
    title: "Engaging Multimedia Content",
    description:
      "Experience quizzes with images, videos, and audio for a more interactive and enjoyable learning experience.",
  },
];

const Features = () => {
  return (
    <div className="my-28 flex flex-col text-[#050505]" id="features">
      <div>
        <h1 className="text-center text-2xl md:text-4xl font-bold max-w-xl mx-auto md:leading-snug">
          Challenge Your Knowledge with{" "}
          <span className="text-[#5E9DFF]">Quizzy</span>, the Ultimate Quiz
          Experience
        </h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 mt-20">
        {features.map((feature) => {
          return (
            <div className="flex flex-col" key={feature.id}>
              <div
                className="p-6 shadow-lg w-fit rounded-full"
                style={{
                  backgroundColor: feature.boxColor,
                  boxShadow: `0 10px 15px -3px ${feature.boxColor}, 0 4px 6px -2px ${feature.boxColor}`,
                }}
              >
                <feature.icon
                  className="w-8 h-8"
                  style={{ color: feature.iconColor }}
                />
              </div>
              <h1 className="font-bold text-2xl my-5">{feature.title}</h1>
              <p className="max-w-md text-lg">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
