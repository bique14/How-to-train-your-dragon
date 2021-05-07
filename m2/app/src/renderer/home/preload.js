const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", async () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }

  const ul = document.getElementById("question-list");
  ul.style.padding = "0";

  const questions = await fetchQuestions();
  const li = createQuestionElements(questions);
  ul.appendChild(li);

  ul.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
      ipcRenderer.send("open-answer-window", e.target.id);
    }
  });
});

const fetchQuestions = async () => {
  const questions = await fetch("http://localhost:2001/questions/");
  return await questions.json();
};

const createQuestionElements = (questions) => {
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

    return fragment;
  });

  return fragment;
};
