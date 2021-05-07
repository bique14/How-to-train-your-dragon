const { BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 875,
    height: 667,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "../../page/index.html"));
  win.webContents.openDevTools();
  win.on("destroyed", () => {
    win = null;
  });

  return win;
}

module.exports = { createWindow };
