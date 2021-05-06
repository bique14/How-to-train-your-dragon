const DATA = require("./QA.json");

const express = require("express");
const app = express();
const PORT = 2001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/questions", (req, res) => {
  res.json(DATA);
});

app.get("/question", (req, res) => {
  const { id } = req.query;
  try {
    if (!id) {
      throw new Error("Invalid query");
    } else {
      const filtered = filterById(DATA, id);
      if (!filtered) {
        throw new Error("Not found");
      } else {
        res.send(filtered);
      }
    }
  } catch (e) {
    res.sendStatus(404);
    res.end();
  }
});

const filterById = (obj, id) => obj.filter((o) => o.id === id)[0];
