import { LEVEL } from "../utils/types";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

  
  type SelectLevelProps = {
    handleSelectLevel: (level: LEVEL) => void;
  };
  export default function SelectLevel({ handleSelectLevel }: SelectLevelProps) {
    return (
      <>
        <CardHeader className="h-16">
          <CardTitle className="font-bold text-center text-3xl uppercase">
            Quiz Naruto
          </CardTitle>
          <CardDescription className="text-center text-md">
            Sélectionne ton niveau de difficulté 🔥
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-96 gap-4">
          <button
            className="w-full bg-amber-400 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-full mx-2"
            onClick={() => handleSelectLevel("débutant")}
          >
            Débutant
          </button>
          <button
            className="w-full bg-amber-400 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-full mx-2"
            onClick={() => handleSelectLevel("confirmé")}
          >
            Confirmé
          </button>
          <button
            className="w-full bg-amber-400 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-full mx-2"
            onClick={() => handleSelectLevel("expert")}
          >
            Expert
          </button>
        </CardContent>
      </>
    );
  }
  