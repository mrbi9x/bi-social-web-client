import { Link, makeStyles, Theme, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { BubbleChart } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  appbarBranding: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  brandingText: {
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  appbarClearfix: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Branding: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Link
        component={RouterLink}
        to="/"
        color="inherit"
        className={classes.appbarBranding}
        underline="none"
      >
        <BubbleChart fontSize="large" />
        <Typography
          variant="h5"
          component="h1"
          noWrap
          className={classes.brandingText}
        >
          Bi Social
        </Typography>
      </Link>
    </>
  );
};

export default Branding;
