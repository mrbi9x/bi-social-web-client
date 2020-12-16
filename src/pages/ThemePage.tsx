import React from "react";
import { selectCurrentTheme } from "configs/themeSlice";
import { useSelector } from "react-redux";
import ToggleTheme from "components/ToggleTheme";

export default function ThemePage() {
  const currentTheme = useSelector(selectCurrentTheme);
  return (
    <div>
      <h3>Theme page</h3>
      <p>
        Current theme : <span>{currentTheme}</span>
      </p>
      <ToggleTheme />
    </div>
  );
}
