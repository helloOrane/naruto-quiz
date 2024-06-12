"use client";
import { useState } from "react";
import { QuizzQuestion } from "../utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

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

  const handleAnswerSubmit = (answer: string) => {
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

  return (
    <>
      <CardHeader className="h-32 md:h-44 ">
        <CardTitle className="font-bold text-center text-xl uppercase">
          Question {currentQuestionIndex + 1}/{MAX_QUESTIONS}
        </CardTitle>
        <CardDescription className="text-center text-md">
          {currentQuestion.question}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center h-96 md:max-h-[350px] xl:max-h-[450px] gap-4 md:gap-6 w-full md:w-[90%] lg:w-[80%] xl:max-w-[550px] gap-4 md:gap-8 m-auto ">
        {currentQuestion.options.map((option, index) => (
          <Card
            className="w-full md:w-[90%] lg:w-[80%] xl:max-w-[550px] bg-amber-400 text-black w-full font-bold p-4 text-center shadow-lg cursor-pointer border-transparent hover:bg-amber-600 "
            key={index}
            onClick={() => handleAnswerSubmit(option)}
          >
            <p>{option}</p>
          </Card>
        ))}
      </CardContent>
    </>
  );
}
