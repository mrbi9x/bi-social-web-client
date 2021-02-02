import {
  Box,
  Divider,
  List,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
import ListItemLink from "components/ListItemLink";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Home,
  Explore,
  TrendingUp,
  Policy,
  Info,
  Feedback,
} from "@material-ui/icons";
import ToggleTheme from "components/ToggleTheme";

const useStyles = makeStyles((theme: Theme) => ({
  rootNavigation: {
    width: "100%",
    maxWidth: "250px",
  },
  infoBox: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "nowrap",
    padding: theme.spacing(1),
    "& > * ": {
      margin: "4px 0",
    },
  },
}));

const LeftSidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={12} className={classes.rootNavigation}>
        <List>
          <ListItemLink to="/" primary="Homepage" icon={<Home />} />
          <ListItemLink to="/explore" primary="Explore" icon={<Explore />} />
          <ListItemLink
            to="/trending"
            primary="Trending"
            icon={<TrendingUp />}
          />
          <Divider variant="middle" />
          <ListItemLink to="/policy" primary="Policy" icon={<Policy />} />
          <ListItemLink to="/about" primary="About" icon={<Info />} />
        </List>
      </Paper>
      <Box marginTop={4}>
        <Paper elevation={6} className={classes.infoBox}>
          <ToggleTheme />
          <Button
            variant="outlined"
            color="default"
            size="small"
            startIcon={<Feedback />}
          >
            Send feedback
          </Button>
          <Divider variant="middle" />
          <Box>
            <Typography variant="subtitle2" color="initial" align="center">
              Bi Social
            </Typography>
            <Typography variant="caption" color="initial" align="center">
              Copyright ©{new Date().getFullYear()}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default LeftSidebar;
