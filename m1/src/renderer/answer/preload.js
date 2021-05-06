const { ipcRenderer } = require("electron");
const MOCK = require("../../../QA.json");

window.addEventListener("DOMContentLoaded", () => {
  const questionText = document.getElementById("question");
  const answerText = document.getElementById("answer");

  ipcRenderer.on("answer", (event, arg) => {
    const { question, answer } = filtered(MOCK, arg);
    questionText.innerText = question;
    answerText.innerText = `Answer: ${answer}`;
  });
});

const filtered = (arr, id) => arr.filter((a) => a.id === id)[0];
