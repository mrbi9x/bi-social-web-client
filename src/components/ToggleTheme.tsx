import React from "react";
import { IconButton } from "@material-ui/core";
import { selectCurrentTheme, ThemeEnum, toggleTheme } from "configs/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "configs/store";
import { THEME_LOCALE_STORAGE_KEY } from "configs/theme";
import { Brightness4, Brightness7 } from "@material-ui/icons";

export default function ToggleTheme() {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch: AppDispatch = useDispatch();
  const getTogglingTheme = (currentTheme: ThemeEnum): ThemeEnum =>
    currentTheme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  const handlerToggleTheme = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const togglingTheme: ThemeEnum = getTogglingTheme(currentTheme);
    dispatch(toggleTheme(togglingTheme));
    localStorage.setItem(THEME_LOCALE_STORAGE_KEY, togglingTheme);
  };
  return (
    <>
      <IconButton onClick={handlerToggleTheme} color="default">
        {currentTheme === ThemeEnum.LIGHT ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </>
  );
}
