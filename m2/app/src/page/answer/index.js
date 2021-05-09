window.addEventListener("DOMContentLoaded", () => {
  window.electron.receivedQuestionId(async (id) => await getAnswer(id));
});

const getAnswer = async (id) => {
  const questionText = document.getElementById("question");
  const answerText = document.getElementById("answer");

  const { question, answer } = await fetchAnswer(id);
  questionText.innerText = question;
  answerText.innerText = `Answer: ${answer}`;
};
