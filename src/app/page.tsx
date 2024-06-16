import React from "react";
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
    </div>
  );
}
