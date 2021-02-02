import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Header from "components/Header";
import LeftSidebar from "views/LeftSidebar";

const useStyles = makeStyles((theme: Theme) => ({
  globalGridLayout: {
    height: "100vh",
  },
  main: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
  grow: {
    flexGrow: 1,
  },
  leftSidebar: {
    position: "sticky",
    width: "300px",
    top: `${56 + theme.spacing(2)}px`,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      top: `${48 + theme.spacing(2)}px`,
    },
    [theme.breakpoints.up("sm")]: {
      top: `${64 + theme.spacing(4)}px`,
    },
  },
  rightSidebar: {
    width: "300px",
  },
}));

export default function HomeLayout() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        className={classes.globalGridLayout}
        wrap="nowrap"
      >
        <Grid item container>
          <Header />
        </Grid>
        <Grid item container className={classes.main}>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              alignContent="stretch"
              wrap="nowrap"
            >
              <Grid item container className={classes.leftSidebar}>
                <Box width="250px">
                  <LeftSidebar />
                </Box>
              </Grid>
              <Grid item container className={classes.main}>
                <Box mx={4}>
                  {new Array(100).fill(null).map((item, idx) => (
                    <>
                      <Paper key={idx}>
                        <Typography variant="body1" color="initial">
                          {idx + 1}. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui
                          officia deserunt mollit anim id est laborum.
                        </Typography>
                      </Paper>
                      <Box my={2} />
                    </>
                  ))}
                </Box>
              </Grid>
              <Grid item container className={classes.rightSidebar}>
                <Box width="300px">
                  <Paper>
                    <Typography variant="body2" color="initial">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Typography>
                  </Paper>
                </Box>
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
