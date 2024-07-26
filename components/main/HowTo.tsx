import React from "react";

interface HowTo {
  id: string;
  number: string;
  title: string;
  description: string;
}

const howTos: HowTo[] = [
  {
    id: "1",
    number: "1",
    title: "Create an Account",
    description:
      "Sign up with your email address to create a free account. This allows you to track your quiz progress and results.",
  },
  {
    id: "2",
    number: "2",
    title: "Choose a Quiz",
    description:
      "Browse through our extensive library of quizzes across various topics. Select the one that interests you the most.",
  },
  {
    id: "3",
    number: "3",
    title: "Take the Quiz",
    description:
      "Answer each question to the best of your ability. You'll see one question at a time with a timer to keep you on track.",
  },
  {
    id: "4",
    number: "4",
    title: "Review Your Results",
    description:
      "Once you've completed the quiz, review your answers and see how well you did. You can also retake quizzes to improve your score.",
  },
];

const HowTo = () => {
  return (
    <div className="my-28 flex flex-col text-[#050505]" id="how-it-works">
      <div>
        <h1 className="text-center md:text-left text-2xl md:text-4xl font-bold max-w-xl md:leading-snug">
          Master Your Knowledge with{" "}
          <span className="text-[#5E9DFF]">Quizzy</span>! Enhance your skills
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 mt-20">
        {howTos.map((howTo) => {
          return (
            <div className="grid gap-4" key={howTo.id}>
              <h1 className="font-bold text-2xl md:text-4xl">
                {howTo.number}
                <span className="text-[#34AEFF]">.</span>
              </h1>
              <h3 className="text-2xl font-bold">{howTo.title}</h3>
              <p className="text-muted-foreground font-semibold text-lg">
                {howTo.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowTo;
