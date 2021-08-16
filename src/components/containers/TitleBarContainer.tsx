import React, { useState } from "react";
import {
    TitleBarButton,
    TitleBarExitButton,
    TitleBarStyle
} from "../styles/TitleBarStyle";
import * as _ from "../../@types/global"; //I don't know why I need it.

export const NekomataTitleBar = () => {
    const [isMaximized, setMaximized] = useState<boolean>();

    const minimizeHandler = () => window.titleBarProvider.onMinimize();
    const appExitHandler = () => window.titleBarProvider.onExit();

    const maximizeHandler = () => {
        window.titleBarProvider.onMaximize();
        setMaximized(true)
    }
    const unMaximizeHandler = () => {
        window.titleBarProvider.onUnMaximize();
        setMaximized(false)
    }

    return (
        <TitleBarStyle>
            <TitleBarExitButton onClick={appExitHandler} aria-label={"閉じる"}>
                <svg aria-hidden={false} width={12} height={12} viewBox={"0 0 12 12"}>
                    <polygon fill="white"
                             fillRule="evenodd"
                             points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"
                    />
                </svg>
            </TitleBarExitButton>
            { isMaximized ?
                <TitleBarButton onClick={unMaximizeHandler} aria-label={"元に戻す"}>

                </TitleBarButton> :
                <TitleBarButton onClick={maximizeHandler} aria-label={"最大化"}/>
            }
            <TitleBarButton onClick={minimizeHandler} aria-label={"最小化"}/>
        </TitleBarStyle>
    )
}
