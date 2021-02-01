import { Divider, List, Paper } from "@material-ui/core";
import ListItemLink from "components/ListItemLink";
import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Home, Explore } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  rootNavigation: {
    width: "100%",
    maxWidth: "200px",
  },
}));

const LeftSidebar: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={12} className={classes.rootNavigation}>
        <List>
          <ListItemLink to="/" primary="Homepage" icon={<Home />} />
          <ListItemLink to="/themes" primary="Link 1" icon={<Explore />} />
          <ListItemLink to="/" primary="Link 2" />
          <Divider variant="middle" />
          <ListItemLink to="/" primary="Link 3" />
          <ListItemLink to="/" primary="Link 4" />
        </List>
      </Paper>
    </>
  );
};

export default LeftSidebar;
