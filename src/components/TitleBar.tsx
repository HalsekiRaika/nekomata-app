import React, { useState } from "react";
import { styled } from "./styles/ThemeStyle";
import * as _ from "../@types/global"; //I don't know why I need it.

export const NekomataTitleBar = () => {
    const [isMaximized, setMaximized] = useState<boolean>();

    const minimizeHandler = () => window.titlebar.onMinimize();
    const appExitHandler = () => window.titlebar.onExit();

    const maximizeHandler = () => {
        window.titlebar.onMaximize();
        setMaximized(true)
    }
    const unMaximizeHandler = () => {
        window.titlebar.onUnMaximize();
        setMaximized(false)
    }

    return (
        <TitleBar>
            <ExitButton onClick={appExitHandler} aria-label={"閉じる"}>
                <svg aria-hidden={false} width={12} height={12} viewBox={"0 0 12 12"}>
                    <polygon fill="white" fillRule="evenodd"
                             points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"/>
                </svg>
            </ExitButton>
            <Button onClick={isMaximized ? unMaximizeHandler : maximizeHandler} aria-label={isMaximized ? "元に戻す" : "最大化"}>
                <svg aria-hidden={false} width={12} height={12}>
                    <rect fill="none" stroke="white" width="12" height="12" fillRule="evenodd" />
                </svg>
            </Button>
            <Button onClick={minimizeHandler} aria-label={"最小化"}>
                <svg aria-hidden={false} width={12} height={12} viewBox={"0 0 12 1"}>
                    <rect fill="none" stroke="white" width="12" height="0.5" fillRule="evenodd" />
                </svg>
            </Button>
            <Spacer />
            <Button aria-label={"リロード"}>
                <Temp>R</Temp>
            </Button>
        </TitleBar>
    )
}

const TitleBar = styled.div`
  top: 0;
  height: 30px;
  background-color: ${(props): string => props.theme.FOREGROUND};
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  -webkit-app-region: drag;
  border-color: ${(props): string => props.theme.EMPHASIS_2};
  border-bottom-style: solid;
  border-width: 0.5px;
`;

const Button = styled.div`
  top: -4px;
  width: 45px;
  height: 30px;
  float: right;
  background-color: ${(props): string => props.theme.FOREGROUND};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-app-region: no-drag;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const ExitButton = styled.div`
  top: -4px;
  width: 45px;
  height: 30px;
  background-color: ${(props): string => props.theme.FOREGROUND};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-app-region: no-drag;

  &:hover {
    background-color: rgba(244, 67, 54, 0.5);
  }
`;

const Spacer = styled.div`
  width: 45px;
  height: 30px;
  background-color: ${(props): string => props.theme.FOREGROUND};
`;

const Temp = styled.div`
  color: white;
`;