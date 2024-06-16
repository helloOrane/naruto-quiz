"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Laptop from "@/public/img/naruto.png";
import SelectLevel from "./SelectLevel";
import Score from "./Score";
import QuizzContent from "./QuizContent";
import { LEVEL, QuizzType, STEP } from "../utils/types";
import { Card, CardFooter } from "./ui/card";

type QuizzProps = {
  data: QuizzType;
};
export default function Quizz({ data }: QuizzProps) {
  const [currentLevel, setCurrentLevel] = useState<LEVEL>("débutant");
  const [score, setScore] = useState(0);
  const [stepQuiz, setStepQuiz] = useState<STEP>("selectLevel");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const currentQuizz = data[currentLevel];

  const handleSelectLevel = (level: LEVEL) => {
    setCurrentLevel(level);
    setStepQuiz("quizz");
  };
  const handleDisplayScore = () => {
    setStepQuiz("score");
  };

  const resetQuizz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setStepQuiz("selectLevel");

  };

  return (
    <>
      <div className="flex justify-center mt-4 ">
        <Card className="bg-white text-black w-[90%] max-h-[90%]">
          {stepQuiz === "quizz" ? (
            <QuizzContent
              displayScore={handleDisplayScore}
              score={score}
              setScore={setScore}
              currentQuizz={currentQuizz}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              userAnswers={userAnswers}
              setUserAnswers={setUserAnswers}
            />
          ) : stepQuiz === "score" ? (
            <Score score={score} resetQuizz={resetQuizz}/>
          ) : (
            <SelectLevel handleSelectLevel={handleSelectLevel} />
          )}

          <CardFooter className="flex justify-center">
            <Image src={Laptop} alt="Naruto head picture" className="max-h-[150px] md:max-h-52 w-auto" />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
