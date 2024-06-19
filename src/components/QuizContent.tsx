"use client";
import { QuizzQuestion } from "../utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import React, { useEffect, useState } from "react";

const MAX_QUESTIONS = 10;

type QuizzProps = {
  currentQuizz: QuizzQuestion[];
  // restartQuizz: () => void;
  score: number;
  setScore: (value: number) => void;
  displayScore: () => void;
  setCurrentQuestionIndex: (value: number) => void;
  currentQuestionIndex: number;
  setUserAnswers: (value: string[]) => void;
  userAnswers: string[];
};
export default function QuizzContent({
  displayScore,
  currentQuizz,
  score,
  setScore,
  setCurrentQuestionIndex,
  currentQuestionIndex,
  setUserAnswers,
  userAnswers,
}: QuizzProps) {
  const currentQuestion = currentQuizz[currentQuestionIndex];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleAnswerSubmit = (answer: string) => {
    setSelectedOption(answer);
    const correctAnswer = currentQuestion.answer;
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestionIndex < currentQuizz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      displayScore();
    }
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestionIndex]);

  return (
    <>
      <CardHeader className="h-32 ">
        <CardTitle className="font-bold text-center text-2xl md:text-3xl uppercase">
          Question {currentQuestionIndex + 1}/{MAX_QUESTIONS}
        </CardTitle>
        <CardDescription className="text-center text-md">
          {currentQuestion.question}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center h-80 md:max-h-[350px] xl:max-h-[450px] gap-4 md:gap-6 w-full md:w-[90%] lg:w-[80%] xl:max-w-[550px] m-auto ">
        {currentQuestion.options.map((option, index) => (
          <button
            className="w-full md:w-[90%] lg:w-[80%] xl:max-w-[550px] bg-amber-400 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-full mx-2 shadow-xl"
            key={index}
            onClick={() => handleAnswerSubmit(option)}
          >
            <p>{option}</p>
          </button>
        ))}
      </CardContent>
    </>
  );
}
