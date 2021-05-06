const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const path = require("path");

let win, childWindow;
function createWindow() {
  win = new BrowserWindow({
    width: 375,
    height: 667,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");

  win.on("closed", () => {
    win = null;
  });
}

function createChildWindow() {
  childWindow = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  childWindow.loadFile("answer.html");
  childWindow.setPosition(200, 200);

  childWindow.on("closed", () => {
    childWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("open-answer-window", async (event, arg: any) => {
  if (!childWindow) {
    await createSync();
  }
  childWindow.webContents.send("answer", arg);
});

function createSync(): Promise<void> {
  return new Promise<void>((resolve, _): void => {
    createChildWindow();
    childWindow.webContents.on("did-finish-load", () => resolve());
  });
}