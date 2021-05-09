import type { Question } from "../question.type";

export const fetchQuestions = async (): Promise<Question[]> => {
  const questions = await fetch("http://localhost:2001/questions/");
  return await questions.json();
};

export const fetchAnswer = async (questionId: string): Promise<Question> => {
  const question = await fetch(
    `http://localhost:2001/question/?id=${questionId}`
  );
  return await question.json();
};
