import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import Navigate from "components/routers/Navigate";

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
          <Navigate />
          <p>Homepage</p>
        </Container>
      </Grid>
    </>
  );
}
