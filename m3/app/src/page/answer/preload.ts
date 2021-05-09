import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  receivedQuestionId: (fn) => ipcRenderer.on("answer", (event, arg) => fn(arg)),
});
