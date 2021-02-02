import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeState {
  currentTheme: ThemeEnum;
}

const initialState: ThemeState = {
  currentTheme: ThemeEnum.LIGHT,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action: PayloadAction<string | undefined>) {
      if (action) {
        state.currentTheme =
          action.payload === ThemeEnum.DARK ? ThemeEnum.DARK : ThemeEnum.LIGHT;
      } else {
        state.currentTheme =
          state.currentTheme === ThemeEnum.LIGHT
            ? ThemeEnum.DARK
            : ThemeEnum.LIGHT;
      }
    },
  },
});
export const selectCurrentTheme = (state: { theme: ThemeState }) =>
  state.theme.currentTheme;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
