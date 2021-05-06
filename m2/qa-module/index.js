const DATA = require("./QA.json");

const allQuestion = () => DATA;

const getQuestion = (id) => allQuestion().filter((q) => q.id === id)[0];

module.exports = { allQuestion, getQuestion };
