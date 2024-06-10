import Quizz from "@/components/Quiz";
import { quizz } from "@/utils/data";

export default function Home() {
  return (
    <main>
      <Quizz data={quizz} />
    </main>
  );
}
