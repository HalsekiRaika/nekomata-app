declare global {
    export interface Window {
        titleBarProvider: ITitleBarProvider
    }
}

export type ITitleBarProvider = {
    onMinimize: () => void,
    onMaximize: () => void,
    onUnMaximize: () => void,
    onExit: () => void
}

window.titleBarProvider = window.titleBarProvider || {}

export declare const __title_bar_provider__: ITitleBarProvider;