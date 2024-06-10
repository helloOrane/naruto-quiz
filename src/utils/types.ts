export interface QuizzQuestion {
    id: number;
    question: string;
    options: string[];
    answer: string;
    heroId: number;
}

export interface QuizzType {
    débutant: QuizzQuestion[];
    confirmé: QuizzQuestion[];
    expert: QuizzQuestion[];
}

export type LEVEL = "débutant" | "confirmé" | "expert";
export type STEP = "selectLevel" | "quizz" | "score";