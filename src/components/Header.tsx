import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  Box,
  TextField,
  InputAdornment,
  Button,
  Link,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { BubbleChart, AccountBox } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  appbarBranding: {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  appbarClearfix: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.appbarClearfix}>
        <Toolbar disableGutters />
      </AppBar>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        alignContent="stretch"
        wrap="nowrap"
      >
        <AppBar color="transparent" position="fixed" elevation={0}>
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                className={classes.appbarBranding}
                underline="none"
              >
                <BubbleChart fontSize="large" />
                <Typography variant="h5" component="h1" noWrap>
                  Bi Social
                </Typography>
              </Link>
              <Box style={{ flexGrow: 1, textAlign: "center" }}>
                <TextField
                  id="globalSearch"
                  placeholder="Search"
                  variant="outlined"
                  color="primary"
                  size="small"
                  // value={}
                  // onChange={}
                  inputMode="search"
                  margin="dense"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="inherit" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  color="default"
                  size="medium"
                  component={RouterLink}
                  to="/login"
                  startIcon={<AccountBox />}
                >
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    </>
  );
}
