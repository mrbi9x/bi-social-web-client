import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@material-ui/core";
import { getTheme, THEME_LOCALE_STORAGE_KEY } from "./configs/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTheme,
  selectCurrentTheme,
  ThemeEnum,
} from "./configs/themeSlice";
import { AppDispatch } from "./configs/store";
import Routers from "components/routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import { checkAuthStatus } from "configs/authSlice";

const App: React.FC = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch: AppDispatch = useDispatch();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const localTheme = localStorage.getItem(THEME_LOCALE_STORAGE_KEY);

  // const initialTheme = React.useMemo(() => {
  //   if (localTheme && localTheme !== currentTheme) {
  //     dispatch(toggleTheme());
  //   }
  // }, [localTheme, currentTheme, prefersDarkMode]);

  useEffect(() => {
    dispatch(checkAuthStatus());
    console.log("useEffect ", prefersDarkMode);
    if (localTheme && localTheme !== currentTheme) {
      dispatch(toggleTheme());
      return;
    }
    if (!localTheme && prefersDarkMode && currentTheme === ThemeEnum.LIGHT) {
      dispatch(toggleTheme(ThemeEnum.DARK));
    }
  });

  // useEffect(() => {
  //   if (localTheme) {
  //     dispatch(toggleTheme(localTheme));
  //   } else {
  //     if (prefersDarkMode && currentTheme === ThemeEnum.LIGHT) {
  //       dispatch(toggleTheme(ThemeEnum.DARK));
  //     }
  //   }
  //   // dispatch(checkAuthStatus());
  // }, [dispatch, prefersDarkMode, localTheme, currentTheme]);

  return (
    <ThemeProvider theme={getTheme(currentTheme)}>
      <CssBaseline />
      <Router>
        <Routers />
      </Router>
    </ThemeProvider>
  );
};

export default App;
