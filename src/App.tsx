import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { getTheme, THEME_LOCALE_STORAGE_KEY } from "./configs/theme";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectCurrentTheme } from "./configs/themeSlice";
import { AppDispatch } from "./configs/store";
import Routers from "components/routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import { checkAuthStatus } from "configs/authSlice";
import HomeLayout from "layouts/HomeLayout";

const App: React.FC = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_LOCALE_STORAGE_KEY);
    if (localTheme) {
      dispatch(toggleTheme(localTheme));
    }
    // dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={getTheme(currentTheme)}>
        <CssBaseline />
        <Router>
          <Routers />
          {/* <HomeLayout /> */}
        </Router>
        {/* <Router>
          
        </Router> */}
      </ThemeProvider>
    </>
  );
};

export default App;
