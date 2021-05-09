import type { Question } from "../../../question.type";

window.addEventListener("DOMContentLoaded", () => {
  window.electron.receivedQuestionId(async (id) => await getAnswer(id));
});

const getAnswer = async (id) => {
  const questionText = document.getElementById("question");
  const answerText = document.getElementById("answer");

  const {
    question,
    answer,
  }: { question: string; answer: string } = await fetchAnswer(id);

  questionText!.innerText = question;
  answerText!.innerText = `Answer: ${answer}`;
};

const fetchAnswer = async (questionId: string): Promise<Question> => {
  const question = await fetch(
    `http://localhost:2001/question/?id=${questionId}`
  );
  return await question.json();
};
