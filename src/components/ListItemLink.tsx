import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Link from "@material-ui/icons/Link";
import { makeStyles, Theme } from "@material-ui/core/styles";

type ListItemLinkProps = {
  to: string;
  icon?: React.ReactElement;
  primary: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  listItemIcon: {
    minWidth: theme.spacing(4),
  },
}));

const ListItemLink: React.FC<ListItemLinkProps> = ({ to, icon, primary }) => {
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} {...itemProps} /> //ref={ref}
      )),
    [to]
  );
  return (
    <li>
      <ListItem button component={renderLink}>
        {
          <ListItemIcon className={classes.listItemIcon}>
            {icon ? icon : <Link />}
          </ListItemIcon>
        }
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;
