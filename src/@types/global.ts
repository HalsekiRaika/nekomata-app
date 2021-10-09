declare global {
    export interface Window {
        titlebar: ITitleBarProvider
    }
}

export type ITitleBarProvider = {
    onMinimize: () => void,
    onMaximize: () => void,
    onUnMaximize: () => void,
    onExit: () => void
}

window.titlebar = window.titlebar || {}

export declare const __title_bar_provider__: ITitleBarProvider;