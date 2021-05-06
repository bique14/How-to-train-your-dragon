const { ipcRenderer } = require("electron");
const MOCK = require("../../../../QA.json");
const questionText = document.getElementById("question");
const answerText = document.getElementById("answer");

const filtered = (arr, id) => arr.filter((a) => a.id === id)[0];

ipcRenderer.on("answer", (event, arg) => {
  const { question, answer } = filtered(MOCK, arg);
  questionText.innerText = question;
  answerText.innerText = `Answer: ${answer}`;
});
