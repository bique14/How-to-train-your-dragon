import { fetchAnswer } from "../../service";

window.addEventListener("DOMContentLoaded", () => {
  window.electron.receivedQuestionId(async (id) => await getAnswer(id));
});

const getAnswer = async (id: string) => {
  const questionText: HTMLElement | null = document.getElementById("question");
  const answerText: HTMLElement | null = document.getElementById("answer");

  const {
    question,
    answer,
  }: { question: string; answer: string } = await fetchAnswer(id);

  questionText!.innerText = question;
  answerText!.innerText = `Answer: ${answer}`;
};
