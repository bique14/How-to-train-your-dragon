import type { Question } from "../../../question.type";
import { ipcRenderer } from "electron";

window.addEventListener("DOMContentLoaded", () => {
  const questionText: HTMLElement | null = document.getElementById("question");
  const answerText: HTMLElement | null = document.getElementById("answer");

  ipcRenderer.on("answer", async (_: any, arg: string) => {
    const {
      question,
      answer,
    }: { question: string; answer: string } = await fetchQuestion(arg);
    questionText!.innerText = question;
    answerText!.innerText = `Answer: ${answer}`;
  });
});

const fetchQuestion = async (questionId: string): Promise<Question> => {
  const question = await fetch(
    `http://localhost:2001/question/?id=${questionId}`
  );
  return await question.json();
};
