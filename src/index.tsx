import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./actions/store/Store";
import HomeTileContainer from "./components/containers/HomeTileContainer";
import { DefaultStyle } from "./components/styles/DefaultStyle";
import { theme } from "./components/styles/ThemeStyle";
import Logger from "./core/logger/Logger";

const container = document.getElementById("contents");
const logger = new Logger("Render");
logger.pInfo("Set nonce code.");
__webpack_nonce__ = "zxNLsxLiu9XeW8fgHl3PtQ==";

ReactDom.render(
    <Provider store={store}>
        {}
        <ThemeProvider theme={theme}>
            {}
            <DefaultStyle />
            <HomeTileContainer />
        </ThemeProvider>
    </Provider>,

    container
);