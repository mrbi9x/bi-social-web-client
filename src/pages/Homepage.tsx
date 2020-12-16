import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Container maxWidth="md">
          <nav>
            <NavLink to="/" style={{ margin: "0px 8px" }}>
              Home
            </NavLink>
            <NavLink to="/themes" style={{ margin: "0px 8px" }}>
              Themes
            </NavLink>
            <NavLink to="/404" style={{ margin: "0px 8px" }}>
              Not found
            </NavLink>
          </nav>
          <p>Homepage</p>
        </Container>
      </Grid>
    </>
  );
}
