const MOCK = require("../../../QA.json");

window.addEventListener("DOMContentLoaded", () => {
  window.electron.receivedQuestionId(async (id) => getAnswer(id));
});

const getAnswer = (id) => {
  const questionText = document.getElementById("question");
  const answerText = document.getElementById("answer");

  const { question, answer } = findAnswer(MOCK, id);
  questionText.innerText = question;
  answerText.innerText = `Answer: ${answer}`;
};

const findAnswer = (arr, id) => arr.find((a) => a.id === id);
