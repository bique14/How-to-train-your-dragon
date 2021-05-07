import { BrowserWindow } from "electron";
import path from "path";

export function createWindow(): BrowserWindow {
  let win: BrowserWindow | null = new BrowserWindow({
    width: 875,
    height: 667,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "../../page/index.html"));
  win.webContents.openDevTools();

  win.webContents.on("destroyed", () => {
    win = null;
  });

  return win;
}
