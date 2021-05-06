const { ipcRenderer } = require("electron");

ul.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    ipcRenderer.send("open-answer-window", e.target.id);
  }
});
