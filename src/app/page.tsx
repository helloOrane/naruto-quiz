import Head from "next/head";
import Quizz from "../components/Quiz";
import { quizz } from "../utils/data";


export default function Home() {
  return (
    <div>
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Quizz data={quizz} />
      {/* <img src="/img/silhouette.png" alt="silhouette Naruto" className="scale-x-[-1] h-24" /> */}
    </div>
  );
}
