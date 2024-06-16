import React from "react";
import { LEVEL } from "../utils/types";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

  
  type SelectLevelProps = {
    handleSelectLevel: (level: LEVEL) => void;
  };
  export default function SelectLevel({ handleSelectLevel }: SelectLevelProps) {
    return (
      <>
        <CardHeader className="h-16 md:h-18">
          <CardTitle className="font-bold text-center text-2xl md:text-3xl uppercase">
            Quiz Naruto
          </CardTitle>
          <CardDescription className="text-center text-sm md:text-md">
            Sélectionne ton niveau de difficulté 🔥
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-80 md:h-[450px] gap-4 md:gap-8">
          <button
            className="w-full md:w-[90%] lg:w-[80%] xl:max-w-[550px] bg-amber-400 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-full mx-2 shadow-xl"
            onClick={() => handleSelectLevel("débutant")}
          >
            Débutant
          </button>
          <button
            className="w-full md:w-[90%] lg:w-[80%] xl:max-w-[550px] bg-amber-400 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-full mx-2 shadow-xl"
            onClick={() => handleSelectLevel("confirmé")}
          >
            Confirmé
          </button>
          <button
            className="w-full md:w-[90%] lg:w-[80%] xl:max-w-[550px] bg-amber-400 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-full mx-2 shadow-xl"
            onClick={() => handleSelectLevel("expert")}
          >
            Expert
          </button>
        </CardContent>
      </>
    );
  }
  