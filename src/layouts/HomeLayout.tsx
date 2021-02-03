import React from "react";
import {
  Box,
  Container,
  Grid,
  Hidden,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import LeftSidebar from "views/LeftSidebar";
import GlobalLayout from "./GlobalLayout";

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
  mainContent: {
    // maxWidth: "600px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },
  grow: {
    flexGrow: 1,
  },
  leftSidebar: {
    position: "sticky",
    // width: theme.spacing(10),
    top: `${56 + theme.spacing(2)}px`,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      top: `${48 + theme.spacing(2)}px`,
    },
    [theme.breakpoints.up("sm")]: {
      top: `${64 + theme.spacing(4)}px`,
    },
    [theme.breakpoints.up("lg")]: {
      width: "250px",
    },
  },
  rightSidebar: {
    width: "250px",
  },
}));

export default function HomeLayout() {
  const classes = useStyles();
  return (
    <>
      <GlobalLayout>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            alignContent="stretch"
            wrap="nowrap"
          >
            <Hidden xsDown>
              <Grid item className={classes.leftSidebar}>
                <Box className={classes.leftSidebar}>
                  <LeftSidebar />
                </Box>
              </Grid>
            </Hidden>
            <Grid
              item
              container
              justify="center"
              className={classes.mainContent}
            >
              <Box maxWidth="650px">
                {new Array(100).fill(null).map((item, idx) => (
                  <Box marginBottom={2} key={idx}>
                    <Paper>
                      <Box p={2}>
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
                      </Box>
                    </Paper>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item className={classes.rightSidebar}>
                <Box width="250px">
                  <Paper elevation={12}>
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
            </Hidden>
          </Grid>
          {new Array(100).fill(null).map((item, idx) => (
            <Paper key={idx}>
              <Typography variant="h6" color="initial">
                {idx + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
            </Paper>
          ))}
        </Container>
      </GlobalLayout>
      <Grid item>
        <Toolbar />
      </Grid>
    </>
  );
}
