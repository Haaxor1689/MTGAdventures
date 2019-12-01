import { createMuiTheme } from "@material-ui/core/styles";
import baseStyled, { css as styledCss, ThemedStyledInterface, ThemedStyledProps, ThemeProvider as ThemeProv } from "styled-components";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const Options: ThemeOptions = {};

const AdditionalArgs = {};

export const MainTheme = createMuiTheme(Options, AdditionalArgs);

export const ThemeProvider = ThemeProv;
export const css = styledCss;

export type Theme = typeof MainTheme & typeof AdditionalArgs;
export type ComponentProps<T> = ThemedStyledProps<T, Theme>;
const styled = baseStyled as ThemedStyledInterface<Theme>;
export default styled;
