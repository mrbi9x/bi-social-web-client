import React, { useEffect } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { getTheme, THEME_LOCALE_STORAGE_KEY } from "./configs/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleTheme,
  selectCurrentTheme,
  ThemeEnum,
} from "./configs/themeSlice";
import { AppDispatch } from "./configs/store";

const App: React.FC = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_LOCALE_STORAGE_KEY);
    if (localTheme) {
      dispatch(toggleTheme(localTheme));
    }
  }, [dispatch]);

  const handlerToggleTheme = () => {
    const togglingTheme =
      currentTheme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
    localStorage.setItem(THEME_LOCALE_STORAGE_KEY, togglingTheme);
    dispatch(toggleTheme(togglingTheme));
  };

  return (
    <>
      <ThemeProvider theme={getTheme(currentTheme)}>
        <CssBaseline />
        <Typography variant="h1" color="primary" align="center">
          Social
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handlerToggleTheme}
          >
            Toggle Theme {currentTheme}
          </Button>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default App;
