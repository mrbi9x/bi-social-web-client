import React, { useEffect } from "react";
import { selectAuth } from "configs/authSlice";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

interface IAuthRouterProps {
  to: string;
  from?: string;
  element: React.ReactNode;
}

const AuthRouter: React.FC<IAuthRouterProps> = ({
  to,
  from,
  element,
  ...props
}) => {
  const { isAuth } = useSelector(selectAuth);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login", { state: { from: location.pathname } });
    }
  });
  return <>{isAuth && element}</>;
};

export default AuthRouter;
