/* eslint-disable react/no-unescaped-entities */
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const MAX_QUESTIONS = 10;

type ScoreProps = {
  score: number;
  resetQuizz: () => void;
};
export default function Score({ score, resetQuizz }: ScoreProps) {
  const handleScoreMessage = (score: number) => {
    let message = "";

    switch (true) {
      case score <= 4:
        message =
          "Ton parcours commence tout juste, jeune Genin. Ne sois pas découragé par ce résultat, car chaque ninja doit surmonter des défis. Continue à t'entraîner et à approfondir tes connaissances, et un jour tu deviendras un véritable maître ninja !";
        break;
      case score > 4 && score <= 6:
        message =
          "Tu es sur la voie pour devenir un ninja accompli, Chûnin ! Tu as démontré que tu possèdes déjà certaines compétences, mais il te reste encore des défis à relever. Continue de progresser et de te perfectionner, et tu atteindras de nouveaux sommets !";
        break;
      case score > 6 && score <= 9:
        message =
          "Bravo, Jônin ! Tu as montré une maîtrise impressionnante des connaissances ninja. Ton chemin vers l'excellence est clair, mais n'oublie pas qu'il reste toujours des défis à affronter. Continue à te surpasser et à transmettre ton savoir aux générations futures !";
        break;
      case score === 10:
        message =
          "Tu es digne du titre de Kage, maître ninja ! Ta connaissance et ta maîtrise de l'univers de Naruto sont sans égales. Continue à guider et à inspirer les autres par ton exemple. Le village de Konoha est entre de bonnes mains avec toi à sa tête !";
        break;
    }
    return message;
  };

  return (
    <>
      <CardHeader className="h-32">
        <CardTitle className="font-bold text-center text-3xl uppercase">
          Score
        </CardTitle>
        <CardDescription className="text-center text-md font-bold text-orange-600">
          Vous avez obtenu un score de {score}/{MAX_QUESTIONS} !
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center h-80">
        <p className="text-justify">{handleScoreMessage(score)}</p>

          <button
            className="w-full bg-amber-400 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-full mx-2 mt-10" 
            onClick={() => resetQuizz()}
          >
            Retour à la page d'accueil
          </button>
      </CardContent>
    </>
  );
}
