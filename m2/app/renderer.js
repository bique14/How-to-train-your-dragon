const { ipcRenderer } = require("electron");

window.onload = async () => {
  const questions = await fetchQuestions();
  createListElement(questions);
};

const fetchQuestions = async () => {
  const questions = await fetch("http://localhost:2001/questions/");
  return await questions.json();
};

const createListElement = (questions) => {
  const ul = document.getElementById("question-list");
  ul.style.padding = "0";

  const fragment = document.createDocumentFragment();

  questions.forEach((m, i) => {
    const li = document.createElement("li");
    li.textContent = `Q${i + 1}: ${m.question}`;
    li.id = m.id;
    li.style.border = "1px solid black";
    li.style.listStyleType = "none";
    li.style.margin = "1rem 0";
    li.style.padding = "1rem 10px";
    li.style.cursor = "pointer";

    fragment.appendChild(li);
  });

  ul.appendChild(fragment);
};

const ul = document.getElementById("question-list");

ul.addEventListener("click", async (e) => {
  if (e.target.matches("li")) {
    ipcRenderer.send("open-answer-window", e.target.id);
  }
});
