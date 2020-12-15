import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

interface ThemeState {
  currentTheme: "light" | "dark";
}

const initialState: ThemeState = {
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    },
  },
});
export const selectCurrentTheme = (state: RootState) =>
  state.theme.currentTheme;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
