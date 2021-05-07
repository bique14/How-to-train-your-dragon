const { BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow_() {
  win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "../../page/answer.html"));
  win.setPosition(200, 200);

  win.on("closed", () => {
    win = null;
  });
}

function createWindow() {
  return new Promise((resolve, reject) => {
    if (win) return resolve(win);

    createWindow_();
    win.webContents.on("did-finish-load", () => resolve(win));
  });
}

module.exports = { createWindow };
