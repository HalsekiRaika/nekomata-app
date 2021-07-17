import "reset-css/reset.css";
import baseStyle, { createGlobalStyle, ThemedStyledInterface } from "styled-components";

export const DefaultStyle = createGlobalStyle`
  html, body {
    font-family: "Meiryo UI",serif;
    font-size: 12pt;
    height: 100vh;
    width: 100vw;
    background-color: #36393F;
    overflow-y: scroll;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
      overflow: hidden;
      background: rgba(84, 87, 92, 0.7);
      width: 10px;
      border-radius: 3px;
      -webkit-border-radius: 3px;
    }
    
    &::-webkit-scrollbar-button {
      
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(84, 87, 92, 0.7);
    }

    &::-webkit-scrollbar-track:start {
      background: rgba(84, 87, 92, 0.7);
    }
    
    #scrollbar03::-webkit-scrollbar-thumb {
      overflow:hidden;
      border-radius:3px;
      -webkit-border-radius:3px;
      background:#333;
    }
    
    #scrollbar03::-webkit-scrollbar-corner {
      overflow:hidden;
      border-radius:3px;
      -webkit-border-radius:3px;
      background:#333;
    }
  }
`;

export const theme = {
    PRIMARY_0: '#474ABC', // PRIMARY COLOR */
    PRIMARY_1: '#AE8CE2',
    PRIMARY_2: '#8C5FCF',
    PRIMARY_3: '#5A21AF',
    PRIMARY_4: '#202225',
    SECONDARY_1_0: '#30B698', // MAIN SECONDARY COLOR (1) */
    SECONDARY_1_1: '#81DFCA',
    SECONDARY_1_2: '#52CAAF',
    SECONDARY_1_3: '#12A785',
    SECONDARY_1_4: '#028568',
    SECONDARY_2_0: '#FF5644', // MAIN SECONDARY COLOR (2) */
    SECONDARY_2_1: '#FF9E94',
    SECONDARY_2_2: '#FF7668',
    SECONDARY_2_3: '#FF311B',
    SECONDARY_2_4: '#CF1603',
    FOREGROUND: '#333',
    FOREGROUND_REVERSE: '#fff',
};

export type Theme = typeof theme;
export const styled = baseStyle as ThemedStyledInterface<Theme>;