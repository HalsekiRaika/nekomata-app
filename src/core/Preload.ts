import { contextBridge, ipcRenderer } from "electron";
import { IpcRendererEvent } from "electron/main";
import {ApiKey} from "./ApiKey";
import {TitleBarChannel} from "./channels/TitleBarChannel";

contextBridge.exposeInMainWorld(ApiKey.TITLE_BAR, {
    onMinimize: () => ipcRenderer.send(TitleBarChannel.MINIMIZE),
    onMaximize: () => ipcRenderer.send(TitleBarChannel.MAXIMIZE),
    onUnMaximize: () => ipcRenderer.send(TitleBarChannel.UN_MAXIMIZE),
    onExit: () => ipcRenderer.send(TitleBarChannel.EXIT),
})