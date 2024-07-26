import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="md:my-28 flex flex-col-reverse md:flex-row gap-20 items-center justify-between text-[#050505]">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl max-w-lg font-bold">
          Welcome to Quizzy <br />
          Your Ultimate Quiz Platform
        </h1>
        <div className="border-l-2 border-[#050505] px-4 py-3 mt-4">
          <p className="text-lg">
            Challenge your knowledge with a wide range of quizzes and track your
            progress. Ready to test yourself?
          </p>
        </div>
        <div className="mt-10 flex flex-row gap-10 items-center">
          <Button asChild className="font-bold px-10 py-6 text-lg">
            <Link href={"/take-quiz"}>Start Quiz</Link>
          </Button>
          <Link
            href={"#how-it-works"}
            className="flex flex-row gap-2 text-lg font-bold hover:translate-y-[-5px]"
          >
            <ChevronDown className="w-6 h-6" />
            <span>Learn More</span>
          </Link>
        </div>
      </div>
      <div>
        <Image src={"/hero.png"} alt="hero" width={500} height={500} />
      </div>
    </div>
  );
};

export default Hero;
