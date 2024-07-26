"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Answer {
  answer_a: string | null;
  answer_b: string | null;
  answer_c: string | null;
  answer_d: string | null;
  answer_e: string | null;
  answer_f: string | null;
}

interface QuestionProps {
  question: {
    id: number;
    question: string;
    description: string | null;
    answers: Answer;
    multiple_correct_answers: string;
    correct_answers: { [key: string]: string };
    correct_answer: string;
    explanation: string | null;
    tip: string | null;
    tags: { name: string }[];
    category: string;
    difficulty: string;
  };
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const handleAnswer = (answer: string) => {
    onAnswer(answer);
  };

  return (
    <div className="flex flex-col justify-center mx-auto h-[80vh] md:h-[70vh] lg:h-[60vh]">
      <Card className="drop-shadow-md">
        <CardHeader>
          <CardTitle>{question.question}</CardTitle>
          <CardDescription>Select only one answer below!</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            {Object.entries(question.answers).map(([key, answer]) =>
              answer ? (
                <li key={key}>
                  <button
                    onClick={() => handleAnswer(key)}
                    className="text-lg text-left"
                  >
                    {answer}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Question;
