import { BrowserWindow } from "electron";
import path from "path";

export function createWindow() {
  let win: BrowserWindow | null = new BrowserWindow({
    width: 375,
    height: 667,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));
  win.webContents.openDevTools();

  win.webContents.on("destroyed", () => {
    win = null;
  });

  return win;
}
