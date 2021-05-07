import { app, BrowserWindow, ipcMain } from "electron";
import { createWindow as createMainWindow } from "./src/renderer/home/window";
import { createWindow as createChildWindow } from "./src/renderer/answer/window";

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("open-answer-window", async (event, arg) => {
  const cw = await createChildWindow();
  cw?.webContents.send("answer", arg);
});
