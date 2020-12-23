import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigate() {
  return (
    <nav>
      <NavLink
        to="/"
        style={{ margin: "0px 8px" }}
        activeStyle={{ textDecoration: "underline", color: "red" }}
        end
      >
        Home
      </NavLink>
      <NavLink to="/themes" style={{ margin: "0px 8px" }}>
        Themes
      </NavLink>
      <NavLink to="/signin" style={{ margin: "0px 8px" }}>
        Signin
      </NavLink>
      <NavLink to="/404notfoundxxx" style={{ margin: "0px 8px" }}>
        Not found
      </NavLink>
    </nav>
  );
}
