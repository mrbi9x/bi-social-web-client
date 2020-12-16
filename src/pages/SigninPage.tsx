import React, { FormEvent, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Paper,
  Button,
  Container,
  Typography,
  TextField,
  makeStyles,
  Box,
  CircularProgress,
} from "@material-ui/core";
// import { AccountBox } from "@material-ui/icons";
import { AppDispatch } from "configs/store";
import { useDispatch } from "react-redux";
import { setAuth } from "configs/authSlice";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    padding: theme.spacing(2),
  },
  loginForm: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(4),
  },
  submitButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SigninPage() {
  const classes = useStyles();
  const dispatch: AppDispatch = useDispatch();
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  const handlerSignin = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      dispatch(setAuth({ isAuth: true }));
      setStatus("idle");
      navigate("../");
    }, 2500);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        component="main"
        style={{ width: "100vw", minHeight: "100vh" }}
      >
        <Container maxWidth="xs" fixed className={classes.loginContainer}>
          <Paper elevation={24}>
            <Box paddingTop={2}>
              <Typography variant="h4" color="initial" align="center">
                Login
              </Typography>
              <form
                className={classes.loginForm}
                onSubmit={handlerSignin}
                noValidate
              >
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  margin="normal"
                  placeholder="Username or Email"
                  autoComplete="email"
                  fullWidth
                  size="small"
                  // value={}
                  // onChange={}
                />
                <TextField
                  id="passworc"
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  placeholder="Password"
                  fullWidth
                  size="small"
                  // value={}
                  // onChange={}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  size="large"
                  className={classes.submitButton}
                  disabled={status === "loading"}
                >
                  {status === "loading" && <CircularProgress size="1rem" />}
                  Signin
                </Button>
              </form>
            </Box>
          </Paper>
        </Container>
      </Grid>
    </>
  );
}
