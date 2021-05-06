const MOCK = require("./QA.json");

const questionContainer = document.getElementById("question-container");
const ul = document.getElementById("question-list");
ul.style.padding = "0";

const fragment = document.createDocumentFragment();

MOCK.forEach((m, i) => {
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
