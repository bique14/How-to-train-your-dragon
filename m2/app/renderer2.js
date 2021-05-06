const { ipcRenderer } = require("electron");
const questionText = document.getElementById("question");
const answerText = document.getElementById("answer");

ipcRenderer.on("answer", async (event, arg) => {
  const { question, answer } = await fetchQuestion(arg);
  questionText.innerText = question;
  answerText.innerText = `Answer: ${answer}`;
});

const fetchQuestion = async (questionId) => {
  const question = await fetch(
    `http://localhost:2001/question/?id=${questionId}`
  );
  return await question.json();
};
