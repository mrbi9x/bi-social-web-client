import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider, Typography, Button } from '@material-ui/core'
import { getTheme, THEME_LOCALE_STORAGE_KEY } from './configs/theme';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, selectCurrentTheme } from './configs/themeSlice'
import { AppDispatch } from './configs/store';

const App: React.FC = () => {

  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch: AppDispatch = useDispatch();

  
  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_LOCALE_STORAGE_KEY);
    if (localTheme && localTheme !== currentTheme) {
      dispatch(toggleTheme())
    }
  }, [dispatch, currentTheme])



  return (
    <>
    <ThemeProvider theme={getTheme(currentTheme)}>
      <CssBaseline/>
      <Typography variant="h1" color="primary" align="center">Social</Typography>
      <Button variant="outlined" color="default" onClick={() => dispatch(toggleTheme())}>
        Toggle Theme {currentTheme}
      </Button>
    </ThemeProvider>
    </>
  );
}

export default App;
