import { selectAuth } from "configs/authSlice";
import Homepage from "pages/Homepage";
import NotFoundPage from "pages/NotFoundPage";
import ThemePage from "pages/ThemePage";
import React from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";

export default function Routers() {
  const isAuth = useSelector(selectAuth);

  const rootRouters = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/themes",
      element: isAuth ? <ThemePage /> : <NotFoundPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return rootRouters;
}
