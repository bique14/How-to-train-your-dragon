const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const path = require("path");
const mainWindow = require("./src/page/home/window");
const childWindow = require("./src/page/answer/window");

app.whenReady().then(() => {
  mainWindow.createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow.createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("open-answer-window", async (event, arg) => {
  const cw = await childWindow.createWindow();
  cw.webContents.send("answer", arg);
});
