import React from "react";
import { selectCurrentTheme } from "configs/themeSlice";
import { useSelector } from "react-redux";
import ToggleTheme from "components/ToggleTheme";
import Container from "@material-ui/core/Container";
import { Paper, Grid, Box } from "@material-ui/core";

export default function ThemePage() {
  const currentTheme = useSelector(selectCurrentTheme);
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Box component={Paper}>
          <Container maxWidth="lg">
            <h3>Theme page</h3>
            <p>
              Current theme : <span>{currentTheme}</span>
            </p>
            <ToggleTheme />
          </Container>
        </Box>
      </Grid>
    </>
  );
}
