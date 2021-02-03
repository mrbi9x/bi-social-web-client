import { createMuiTheme, Theme } from "@material-ui/core";
import { ThemeEnum } from "./themeSlice";

export const getTheme = (currentTheme: ThemeEnum | undefined): Theme => {
  if (currentTheme && currentTheme === ThemeEnum.DARK) {
    return createMuiTheme({
      palette: {
        type: "dark",
        // primary: {
        // main: "#fff",
        // },
      },
    });
  }
  return createMuiTheme({
    palette: {
      type: "light",
      // primary: {
      // main: "#000",
      // },
      background: {
        default: "#f9f9f9",
      },
    },
  });
};
export const THEME_LOCALE_STORAGE_KEY = "THEME_LOCALE_STORAGE_KEY";
