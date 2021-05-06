const qa = require("qa-module");
const express = require("express");
const app = express();
const PORT = 2001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/questions", (req, res) => {
  const result = qa.allQuestion();
  res.json(result);
});

app.get("/question", (req, res) => {
  const { id } = req.query;
  try {
    if (!id) {
      throw new Error();
    } else {
      const result = qa.getQuestion(id);
      if (!result) {
        throw new Error();
      } else {
        res.send(result);
      }
    }
  } catch (e) {
    res.sendStatus(404);
    res.end();
  }
});
