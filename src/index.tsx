import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./actions/store/Store";
import HomeTileContainer from "./components/containers/HomeTileContainer";
import { DefaultStyle, theme } from "./components/styles/DefaultStyle";

const container = document.getElementById("contents");

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