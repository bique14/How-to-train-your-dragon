const fetchQuestions = async () => {
  const questions = await fetch("http://localhost:2001/questions");
  return await questions.json();
};

const fetchAnswer = async (id) => {
  const qa = await fetch(`http://localhost:2001/question/?id=${id}`);
  return await qa.json();
};
