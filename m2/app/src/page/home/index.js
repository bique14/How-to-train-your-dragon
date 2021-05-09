window.addEventListener("DOMContentLoaded", async () => {
  const ul = document.getElementById("question-list");
  ul.style.padding = "0";

  const questions = await fetchQuestions();

  const li = createQuestionElements(questions);
  ul.appendChild(li);

  ul.addEventListener("click", (e) => {
    if (e.target.matches("li")) {
      window.electron.openAnswerWindow(e.target.id);
    }
  });
});

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
