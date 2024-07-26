"use client";

import { FileQuestion, ShieldX, SpellCheck } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Button } from "../ui/button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

interface Answer {
  answer_a: string | null;
  answer_b: string | null;
  answer_c: string | null;
  answer_d: string | null;
  answer_e: string | null;
  answer_f: string | null;
}

interface Question {
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
}

interface ResultsProps {
  questions: Question[];
  answers: { [key: number]: string };
  onRetakeQuiz: () => void;
}

const Results: React.FC<ResultsProps> = ({
  questions,
  answers,
  onRetakeQuiz,
}) => {
  const { width, height } = useWindowSize();

  const correctAnswers = questions.filter(
    (question) =>
      question.correct_answers[`${answers[question.id]}_correct`] === "true"
  );
  const incorrectAnswers = questions.filter(
    (question) =>
      question.correct_answers[`${answers[question.id]}_correct`] === "false" &&
      answers[question.id]
  );

  return (
    <div className="relative overflow-hidden mb-28 mt-12">
      <Confetti width={width} height={height} />
      <h2 className="text-3xl font-bold">Quiz Results</h2>
      <p>
        Total Questions: <span className="font-bold">{questions.length}</span>
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-14">
        <div className="bg-[#E5F0FF] px-8 py-4 flex flex-row items-center gap-6 rounded-md">
          <FileQuestion className="w-14 h-14 text-[#5E9DFF]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg">Answered Questions</h1>
            <p className="font-bold md:text-4xl">
              {Object.keys(answers).length}
            </p>
          </div>
        </div>
        <div className="bg-[#E2FFF2] px-8 py-4 flex flex-row items-center gap-6 rounded-md">
          <SpellCheck className="w-14 h-14 text-[#2DFF9C]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg">Correct Answers</h1>
            <p className="font-bold md:text-4xl">{correctAnswers.length}</p>
          </div>
        </div>
        <div className="bg-[#FFE7F2] px-8 py-4 flex flex-row items-center gap-6 rounded-md">
          <ShieldX className="w-14 h-14 text-[#FF75B7]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg">Incorrect Answers</h1>
            <p className="font-bold md:text-4xl">{incorrectAnswers.length}</p>
          </div>
        </div>
      </div>
      {incorrectAnswers.length > 0 && (
        <div className="mt-12">
          <h3 className="font-bold text-lg">Incorrect Answers</h3>
          <div className="grid gap-6 mt-3">
            {incorrectAnswers.map((question) => (
              <Card className="drop-shadow-md" key={question.id}>
                <CardHeader>
                  <CardTitle>{question.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Your Answer</TableHead>
                        <TableHead>Correct Answer</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>{answers[question.id]}</TableCell>
                        <TableCell>
                          {Object.keys(question.correct_answers).find(
                            (key) => question.correct_answers[key] === "true"
                          )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      <Button className="mt-6" onClick={onRetakeQuiz}>
        Retake Quiz
      </Button>
    </div>
  );
};

export default Results;
