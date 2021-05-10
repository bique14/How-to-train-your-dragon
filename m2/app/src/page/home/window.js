const { contextBridge, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  let win = new BrowserWindow({
    width: 375,
    height: 667,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));
  win.webContents.openDevTools();

  win.on("destroyed", () => {
    win = null;
  });

  return win;
}

module.exports = { createWindow };
