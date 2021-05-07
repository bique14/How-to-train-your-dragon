import type { Question } from "../../../question.type";
import { ipcRenderer } from "electron";

window.addEventListener("DOMContentLoaded", async () => {
  const ul: HTMLElement | null = document.getElementById("question-list");

  const questions: Question[] = await fetchQuestions();
  const li: DocumentFragment = createQuestionElements(questions);
  if (ul) {
    ul.style.padding = "0";
    ul.appendChild(li);

    ul.addEventListener("click", (e) => {
      const target: HTMLElement = e.target as HTMLElement;

      if (target.matches("li")) {
        ipcRenderer.send("open-answer-window", target.id);
      }
    });
  }
});

const fetchQuestions = async (): Promise<Question[]> => {
  const questions = await fetch("http://localhost:2001/questions/");
  return await questions.json();
};

const createQuestionElements = (questions: Question[]): DocumentFragment => {
  const fragment: DocumentFragment = document.createDocumentFragment();

  questions.forEach((m: Question, i: number) => {
    const li = document.createElement("li");
    li.textContent = `Q${i + 1}: ${m.question}`;
    li.id = m.id;
    li.style.border = "1px solid black";
    li.style.listStyleType = "none";
    li.style.margin = "1rem 0";
    li.style.padding = "1rem 10px";
    li.style.cursor = "pointer";

    fragment.appendChild(li);

    return fragment;
  });

  return fragment;
};
