const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  openAnswerWindow: (id: string) => ipcRenderer.send("open-answer-window", id),
});
