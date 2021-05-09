const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  openAnswerWindow: (id) => ipcRenderer.send("open-answer-window", id),
});
