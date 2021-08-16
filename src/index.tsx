// region WEBPACK_NONCE

import Logger from "./core/logger/Logger";
import { getNonce } from "get-nonce";

const logger = new Logger("Render");
logger.pInfo("Set nonce code.");
__webpack_nonce__ = "zxNLsxLiu9XeW8fgHl3PtQ=="
logger.pInfo(" > " + getNonce());

// end region

import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./actions/store/Store";
import HomeTileContainer from "./components/containers/HomeTileContainer";
import { DefaultStyle } from "./components/styles/DefaultStyle";
import { theme } from "./components/styles/ThemeStyle";
import { NekomataTitleBar } from "./components/containers/TitleBarContainer";

const container = document.getElementById("contents");

ReactDom.render(
    <Provider store={store}>
        {}
        <ThemeProvider theme={theme}>
            {}
            <NekomataTitleBar/>
            <DefaultStyle />
            <HomeTileContainer />
        </ThemeProvider>
    </Provider>,

    container
);