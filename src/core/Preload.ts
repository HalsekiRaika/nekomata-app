import { contextBridge, ipcRenderer } from "electron";
import { IpcRendererEvent } from "electron/main";
import { ApiKey } from "./ApiKey";
import { Signals } from "./Signals";

contextBridge.exposeInMainWorld(ApiKey.TITLE_BAR, {
    onMinimize: () => ipcRenderer.send(Signals.MINIMIZE),
    onMaximize: () => ipcRenderer.send(Signals.MAXIMIZE),
    onUnMaximize: () => ipcRenderer.send(Signals.UN_MAXIMIZE),
    onExit: () => ipcRenderer.send(Signals.EXIT),
})

