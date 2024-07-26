"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Timer from "../Timer";
import Question from "./Question";
import Results from "./Results";
import { LoaderCircle } from "lucide-react";

const API_LEY = process.env.QUIZ_API_KEY;

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

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        `https://quizapi.io/api/v1/questions?apiKey=${process.env.NEXT_PUBLIC_QUIZ_API_KEY}&limit=10`
      );
      setQuestions(response.data);
    } catch (error) {
      console.error("Failed to fetch questions", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedIndex = localStorage.getItem("currentQuestionIndex");
      const savedAnswers = localStorage.getItem("answers");
      if (savedIndex) setCurrentQuestionIndex(JSON.parse(savedIndex));
      if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "currentQuestionIndex",
        currentQuestionIndex.toString()
      );
      localStorage.setItem("answers", JSON.stringify(answers));
    }
  }, [currentQuestionIndex, answers]);

  const handleAnswer = (answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questions[currentQuestionIndex].id]: answer,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
      if (typeof window !== "undefined") {
        localStorage.removeItem("currentQuestionIndex");
        localStorage.removeItem("answers");
      }
    }
  };

  const handleTimeUp = () => {
    setQuizCompleted(true);
    if (typeof window !== "undefined") {
      localStorage.removeItem("currentQuestionIndex");
      localStorage.removeItem("answers");
    }
  };

  const handleRetakeQuiz = async () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuizCompleted(false);
    setLoading(true);
    await fetchQuestions();
    if (typeof window !== "undefined") {
      localStorage.removeItem("currentQuestionIndex");
      localStorage.removeItem("answers");
    }
  };

  if (loading) {
    return (
      <div className="h-[80vh] flex flex-col mx-auto text-center justify-center">
        <div className="flex flex-row gap-3 items-center">
          <LoaderCircle className="animate-spin h-10 w-10" />
          <h1 className="text-xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {!quizCompleted ? (
        <>
          <Timer initialTime={600} onTimeUp={handleTimeUp} />
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <Results
          questions={questions}
          answers={answers}
          onRetakeQuiz={handleRetakeQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
