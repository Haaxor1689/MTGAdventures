import { CssBaseline, ThemeProvider as MUIThemeProvider, StylesProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { MainTheme, ThemeProvider } from "./Components/Styled/Theme";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <StylesProvider injectFirst>
        <ThemeProvider theme={MainTheme}>
            <MUIThemeProvider theme={MainTheme}>
                <CssBaseline />
                <App />
            </MUIThemeProvider>
        </ThemeProvider>
    </StylesProvider>,
    document.getElementById("root")
);

serviceWorker.register();
