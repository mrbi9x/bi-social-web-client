import ExplorePage from "pages/ExplorePage";
import Homepage from "pages/Homepage";
import NotFoundPage from "pages/NotFoundPage";
import LoginPage from "pages/LoginPage";
import ThemePage from "pages/ThemePage";
import TrendingPage from "pages/TrendingPage";
import React from "react";
import { useRoutes } from "react-router-dom";
import AuthRouter from "./AuthRouter";

export default function Routers() {
  const rootRouters = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/themes",
      element: <AuthRouter to="/themes" element={<ThemePage />} />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/explore",
      element: <ExplorePage />,
    },
    {
      path: "/trending",
      element: <AuthRouter to="/trending" element={<TrendingPage />} />,
    },
    {
      path: "/policy",
      element: <TrendingPage />,
    },
    {
      path: "/about",
      element: <TrendingPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return rootRouters;
}
