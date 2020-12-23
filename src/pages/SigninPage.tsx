import React, { FC, useState } from "react";
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
  Avatar,
  InputAdornment,
  IconButton,
  Divider,
} from "@material-ui/core";
import {
  AccountBox,
  Clear,
  Lock,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { AppDispatch } from "configs/store";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, doLogin } from "configs/authSlice";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { getSecretUUID, authen, AuthRequest } from "apis/AuthApi";
import { useForm } from "react-hook-form";

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
    alignItems: "center",
    padding: theme.spacing(4),
  },
  textfieldIconColor: {
    color: "gray",
  },
  submitButton: {
    margin: theme.spacing(2, 0),
  },
}));

interface ISigninPageLocationState {
  from?: string;
}

const SigninPage: FC<any> = () => {
  const classes = useStyles();
  const { isAuth, status, error } = useSelector(selectAuth);
  const navigate = useNavigate();
  const location = useLocation();
  const backUrl = (location.state as ISigninPageLocationState)?.from;
  // if (isAuth) {
  //   navigate(backUrl ? backUrl : "/");
  // }
  const dispatch: AppDispatch = useDispatch();
  const { register, handleSubmit, reset, errors } = useForm<AuthRequest>();
  const [showPassword, setShowPassword] = useState(false);

  const handlerSignin = (data: AuthRequest) => {
    try {
      dispatch(doLogin(data)).then(() => navigate(backUrl ? backUrl : "/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isAuth && navigate(-1)}
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
            <Box>
              <form
                className={classes.loginForm}
                onSubmit={handleSubmit(handlerSignin)}
                noValidate
              >
                <Avatar />
                <Typography variant="h4" color="initial" align="center">
                  Signin
                </Typography>
                <TextField
                  name="username"
                  id="username"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  placeholder="Email"
                  autoComplete="off"
                  color="primary"
                  fullWidth
                  error={errors.username ? true : false}
                  helperText={errors?.username && "Email is required"}
                  inputRef={register({ required: true })}
                  InputProps={{
                    // startAdornment: (
                    //   <InputAdornment position="start">
                    //     <AccountBox className={classes.textfieldIconColor} />
                    //   </InputAdornment>
                    // ),
                    endAdornment: (
                      <InputAdornment position="end" disableTypography>
                        <IconButton
                          aria-label="Clear"
                          onClick={() => reset()}
                          size="small"
                        >
                          <Clear />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="password"
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  margin="normal"
                  placeholder="Password"
                  color="primary"
                  fullWidth
                  error={errors.password !== undefined}
                  helperText={errors.username && "Password is required"}
                  inputRef={register({ required: true })}
                  InputProps={{
                    // startAdornment: (
                    //   <InputAdornment position="start">
                    //     <Lock className={classes.textfieldIconColor} />
                    //   </InputAdornment>
                    // ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Show password"
                          onClick={() => setShowPassword(!showPassword)}
                          size="small"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    "aria-selected": false,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  size="large"
                  className={classes.submitButton}
                  disabled={status === "loading"}
                  startIcon={
                    status === "loading" && <CircularProgress size="1rem" />
                  }
                >
                  Signin
                </Button>
                <Divider variant="middle" />
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    Not have account? <NavLink to="/signup">Signup</NavLink>
                  </Typography>
                </Box>
                <Typography variant="subtitle2" color="error">
                  {error && JSON.stringify(error)}
                </Typography>
              </form>
            </Box>
          </Paper>
        </Container>
      </Grid>
    </>
  );
};

export default SigninPage;
