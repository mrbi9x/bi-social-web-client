import { Grid, makeStyles, Theme } from "@material-ui/core";
import Header from "components/Header";
import React from "react";

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
}));

const GlobalLayout: React.FC = ({ children, ...props }) => {
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
        <Grid item container className={classes.main} {...props}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default GlobalLayout;
