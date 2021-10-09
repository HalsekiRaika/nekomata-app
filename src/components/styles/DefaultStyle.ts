import "reset-css/reset.css"
import { createGlobalStyle } from "styled-components";

export const DefaultStyle = createGlobalStyle`
  html, body {
    font-family: "Meiryo UI",serif;
    font-size: 12pt;
    height: 100vh;
    width: 100vw;
    background-color: #18191A; /* DEEP-BLACK ;) */
    overflow: hidden;
  }
`;