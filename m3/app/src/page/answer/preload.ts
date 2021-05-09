import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  receivedQuestionId: (fn: (id: string) => void) =>
    ipcRenderer.on("answer", (event, arg) => fn(arg)),
});
