const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const path = require("path");

let win, childWindow;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.webContents.openDevTools();
  win.loadFile("index.html");
}

function createChildWindow() {
  childWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  childWindow.webContents.openDevTools();
  childWindow.loadFile("answer.html");

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

ipcMain.on("open-answer-window", async (event, arg) => {
  if (!childWindow) {
    await createSync();
  }
  childWindow.webContents.send("answer", arg);
});

function createSync() {
  return new Promise((resolve, reject) => {
    createChildWindow();
    childWindow.webContents.on("did-finish-load", () => resolve());
  });
}
