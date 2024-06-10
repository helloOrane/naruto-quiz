"use client";
import { useState } from "react";
import Image from "next/image";
// import Naruto from "@/public/images/naruto-head.png";
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

  const currentQuizz = data[currentLevel];

  const restartQuizz = () => {
    setStepQuiz("selectLevel");
  };

  const handleSelectLevel = (level: LEVEL) => {
    setCurrentLevel(level);
    setStepQuiz("quizz");
  };
  const handleDisplayScore = () => {
    setStepQuiz("score");
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <Card className="bg-white text-black w-96 h-[680px]">
          {stepQuiz === "quizz" ? (
            <QuizzContent
              displayScore={handleDisplayScore}
              score={score}
              setScore={setScore}
              currentQuizz={currentQuizz}
              restartQuizz={restartQuizz}
            />
          ) : stepQuiz === "score" ? (
            <Score score={score} />
          ) : (
            <SelectLevel handleSelectLevel={handleSelectLevel} />
          )}

          <CardFooter className="flex justify-center">
            <Image src={Laptop} alt="Naruto head picture" height={200} />
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
