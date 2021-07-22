import "reset-css/reset.css"
import { createGlobalStyle } from "styled-components";

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