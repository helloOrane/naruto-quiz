"use client";
import { useState } from "react";
import { QuizzQuestion } from "../utils/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


const MAX_QUESTIONS = 10;

type QuizzProps = {
  currentQuizz: QuizzQuestion[];
  restartQuizz: () => void;
  score: number;
  setScore: (value: number) => void;
  displayScore: () => void;
};
export default function QuizzContent({
  displayScore,
  currentQuizz,
  restartQuizz,
  score,
  setScore,
}: QuizzProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
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
      setTimeout(() => {
        resetQuizz();
      }, 10000);
    }
  };

  const resetQuizz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    restartQuizz();
  };

  return (
    <>
      <CardHeader className="h-32 ">
        <CardTitle className="font-bold text-center text-xl uppercase">
          Question {currentQuestionIndex + 1}/{MAX_QUESTIONS}
        </CardTitle>
        <CardDescription className="text-center text-md">
          {currentQuestion.question}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center h-80 gap-4">
        {currentQuestion.options.map((option, index) => (
          <Card
            className="bg-amber-400 text-black w-full p-4 text-center shadow-lg cursor-pointer border-transparent hover:bg-amber-600 "
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
