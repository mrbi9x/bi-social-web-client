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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BubbleChart } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  appbarBranding: {
    display: "inline-flex",
    alignItems: "center",
  },
  appbarClearfix: {
    backgroundColor: "white",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <>
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
              <Box component="span" className={classes.appbarBranding}>
                <BubbleChart fontSize="large" />
                <Typography variant="h5" component="h1" noWrap>
                  Bi Social
                </Typography>
              </Box>
              <Box style={{ flexGrow: 1, textAlign: "center" }}>
                <TextField
                  id="globalSearch"
                  //   label="Search"
                  placeholder="Search"
                  variant="outlined"
                  //   color="primary"
                  size="small"
                  // value={}
                  // onChange={}
                  inputMode="search"
                  margin="dense"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box>
                <Button variant="outlined" color="default" size="medium">
                  Start
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
      <AppBar position="static" className={classes.appbarClearfix}>
        <Toolbar />
      </AppBar>
    </>
  );
}
