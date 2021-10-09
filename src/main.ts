import path from "path";
import {app, BrowserWindow, ipcMain} from "electron";
import Logger from "./core/logger/Logger";
import * as IsDev from "electron-is-dev";
import { Signals } from "./core/Signals";

const logger = new Logger("Electron");

let windowProp: BrowserWindow;

const createWindow = (): void => {
    windowProp = new BrowserWindow({
        height: 720,
        width: 1280,
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            nodeIntegrationInWorker: false,

            // Disallow integration with Node.js in the render process.
            preload: path.join(__dirname, "./core/Preload.js")
        }
    });

    windowProp.loadFile(path.join(__dirname, "./index.html")).then(_ => {
        logger.pInfo("Html file loaded.")
    });

    if (IsDev) {
        require("electron-reload")(__dirname, {
            electron: path.join(__dirname, "node_modules", ".bin", "electron"),
            forceHardReset: true,
            hardResetMethod: 'exit'
        });
    }
};

app.whenReady().then(createWindow).then(_ => {
    logger.pInfo("Window was created!")
});

// #region ipc

ipcMain.on(Signals.MINIMIZE, () =>
    windowProp.minimize()
);

ipcMain.on(Signals.MAXIMIZE, () =>
    windowProp.maximize()
);

ipcMain.on(Signals.UN_MAXIMIZE, () =>
    windowProp.unmaximize()
);

ipcMain.on(Signals.EXIT, () =>
    windowProp.close()
);

// #endregion