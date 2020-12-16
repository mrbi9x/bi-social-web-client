import React from "react";
import { Button } from "@material-ui/core";
import { selectCurrentTheme, ThemeEnum, toggleTheme } from "configs/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "configs/store";
import { THEME_LOCALE_STORAGE_KEY } from "configs/theme";

export default function ToggleTheme() {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch: AppDispatch = useDispatch();
  const getTogglingTheme = (currentTheme: ThemeEnum): ThemeEnum =>
    currentTheme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  const handlerToggleTheme = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const togglingTheme: ThemeEnum = getTogglingTheme(currentTheme);
    localStorage.setItem(THEME_LOCALE_STORAGE_KEY, togglingTheme);
    dispatch(toggleTheme(togglingTheme));
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={handlerToggleTheme}>
        Toggle Theme {getTogglingTheme(currentTheme)}
      </Button>
    </>
  );
}
