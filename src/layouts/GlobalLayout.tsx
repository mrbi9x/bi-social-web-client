import React from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Header from "./Header";

const useStyles = makeStyles({
  globalGridLayout: {
    height: "100vh",
  },
  main: {
    marginTop: "32px",
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  leftSidebar: {
    position: "sticky",
    top: "92px",
    width: "300px",
  },
  rightSidebar: {
    // position: "sticky",
    // top: "92px",
    width: "300px",
  },
});

export default function GlobalLayout() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        // spacing={4}
        direction="column"
        className={classes.globalGridLayout}
        wrap="nowrap"
      >
        <Grid item>
          <Header />
        </Grid>
        <Grid item className={classes.main}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={1}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              alignContent="stretch"
              wrap="nowrap"
            >
              <Grid item container className={classes.leftSidebar}>
                <Paper>
                  <Typography variant="h6" color="initial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item container className={classes.main}>
                {new Array(100).fill(null).map((item, idx) => (
                  <>
                    <Paper key={idx}>
                      <Typography variant="h6" color="initial">
                        {idx + 1}. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                      </Typography>
                    </Paper>
                    <Box my={2} />
                  </>
                ))}
              </Grid>
              <Grid item container className={classes.rightSidebar}>
                <Paper>
                  <Typography variant="h6" color="initial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            {new Array(100).fill(null).map((item, idx) => (
              <Paper key={idx}>
                <Typography variant="h6" color="initial">
                  {idx + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </Typography>
              </Paper>
            ))}
          </Container>
        </Grid>
        <Grid item>
          {/* <AppBar position="static" color="inherit"> */}
          <Toolbar />
          {/* </AppBar> */}
        </Grid>
      </Grid>
    </>
  );
}
