import express from "express";
import type { Question } from "qa-module";
const qa = require("qa-module");

const app: express.Application = express();
const PORT: number = 2001;

app.listen(PORT, (): void => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/questions", (_, res) => {
  const result: Question[] = qa.allQuestion();
  res.json(result);
});

app.get("/question", (req, res) => {
  const id: string = req.query.id as string;
  try {
    if (!id) {
      throw new Error();
    } else {
      const result: Question = qa.getQuestion(id);
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
