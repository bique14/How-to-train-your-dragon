import DATA from "./QA.json";

type Question = {
  id: string;
  question: string;
  answer: string;
};

const allQuestion = (): Question[] => DATA;

const getQuestion = (id: string): Question =>
  allQuestion().filter((q) => q.id === id)[0];

export { allQuestion, getQuestion };
export type { Question };
