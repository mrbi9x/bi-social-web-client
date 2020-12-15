import { createMuiTheme } from "@material-ui/core";

export const getTheme = (currentTheme: "light" | "dark") => {
  if (currentTheme === "dark") {
    return createMuiTheme({
      palette: {
        type: "dark",
      },
    });
  }
  return createMuiTheme({
    palette: {
      type: "light",
    },
  });
};
export const THEME_LOCALE_STORAGE_KEY = "THEME_LOCALE_STORAGE_KEY";
