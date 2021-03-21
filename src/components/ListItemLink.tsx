import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@material-ui/core";
import Link from "@material-ui/icons/Link";
import { makeStyles, Theme } from "@material-ui/core";

type ListItemLinkProps = {
  to: string;
  icon?: React.ReactElement;
  primary: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  listItem: {
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
  },
  listItemIcon: {
    minWidth: theme.spacing(3),
  },
  listItemText: {
    marginLeft: theme.spacing(2),
    margin: 0,
  },
}));

const ListItemLink: React.FC<ListItemLinkProps> = ({ to, icon, primary }) => {
  const classes = useStyles();
  const isShowText = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} {...itemProps} /> //ref={ref}
      )),
    [to]
  );
  return (
    <li>
      <ListItem
        button
        component={renderLink}
        selected={primary === "Homepage"}
        className={classes.listItem}
        disableGutters
      >
        {
          <ListItemIcon className={classes.listItemIcon}>
            {icon ? icon : <Link />}
          </ListItemIcon>
        }
        {isShowText && (
          <ListItemText primary={primary} className={classes.listItemText} />
        )}
      </ListItem>
    </li>
  );
};

export default ListItemLink;
