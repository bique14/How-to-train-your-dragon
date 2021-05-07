import { BrowserWindow } from "electron";
import path from "path";

let win: BrowserWindow | null;

function createWindow_(): void {
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

export function createWindow(): Promise<BrowserWindow | null> {
  return new Promise((resolve, _) => {
    if (win) return resolve(win);

    createWindow_();

    win!.webContents.on("did-finish-load", () => resolve(win));
  });
}
