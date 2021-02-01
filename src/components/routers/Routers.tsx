import { selectAuth } from "configs/authSlice";
import Homepage from "pages/Homepage";
import NotFoundPage from "pages/NotFoundPage";
import SigninPage from "pages/SigninPage";
import ThemePage from "pages/ThemePage";
import React from "react";
import { useSelector } from "react-redux";
import { useRoutes, Navigate } from "react-router-dom";

export default function Routers() {
  const { isAuth } = useSelector(selectAuth);

  const rootRouters = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/themes",
      element: isAuth ? (
        <ThemePage />
      ) : (
        <Navigate to="/login" state={{ from: "/themes" }} /> //replace={true}
      ),
    },
    {
      path: "/login",
      element: <SigninPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return rootRouters;
}
