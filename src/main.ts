import path from "path";
import { app, BrowserWindow } from "electron";
import Logger from "./core/logger/Logger";
import * as IsDev from "electron-is-dev";

const logger = new Logger("Electron");

const createWindow = (): void => {
    const windowProp = new BrowserWindow({
        height: 720,
        width: 1280,
        //frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            nodeIntegrationInWorker: false,

            // Disallow integration with Node.js in the render process.
            preload: path.join(__dirname, "./core/preload.js")
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