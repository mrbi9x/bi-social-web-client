import React, { FC, useCallback, useEffect, useState } from "react";
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
import { Clear, Visibility, VisibilityOff } from "@material-ui/icons";
import { AppDispatch } from "configs/store";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, doLogin } from "configs/authSlice";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthRequest } from "apis/AuthApi";
import { useForm } from "react-hook-form";
import { Location, State } from "history";
import CentererLayout from "layouts/CentererLayout";
import Branding from "components/Branding";

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

interface ILoginPageLocationState {
  from?: string;
}

const LoginPage: FC = () => {
  const classes = useStyles();
  const { isAuth, status, error } = useSelector(selectAuth);
  const navigate = useNavigate();
  const location: Location<State> = useLocation();
  const backUrl = (location.state as ILoginPageLocationState)?.from;
  const dispatch: AppDispatch = useDispatch();

  const { register, handleSubmit, reset, errors, watch } = useForm<AuthRequest>(
    {
      criteriaMode: "firstError",
    }
  );
  const [showPassword, setShowPassword] = useState(false);

  const handlerSignin = (data: AuthRequest, event: any) => {
    event.preventDefault();
    try {
      dispatch(doLogin(data));
    } catch (error) {
      console.log(error);
    }
  };

  const goBack = useCallback(() => {
    if (isAuth) {
      backUrl ? navigate(backUrl) : navigate(-1);
    }
  }, [backUrl, navigate, isAuth]);

  useEffect(() => {
    if (isAuth) {
      goBack();
    }
  }, [isAuth, goBack]);

  return (
    <>
      <CentererLayout>
        <Container maxWidth="xs" fixed className={classes.loginContainer}>
          <Paper elevation={24}>
            <Box>
              <form
                className={classes.loginForm}
                onSubmit={handleSubmit(handlerSignin)}
                noValidate
              >
                <Branding />
                <Avatar variant="rounded" />
                {/* <Typography variant="h6" color="initial" align="center">
                  Signin
                </Typography> */}
                <Typography variant="subtitle2" color="error">
                  {error}&nbsp;
                </Typography>
                <TextField
                  name="username"
                  id="username"
                  label="Email or Phone"
                  variant="outlined"
                  // size="small"
                  margin="normal"
                  // placeholder="Email"
                  autoComplete="off"
                  color="primary"
                  fullWidth
                  error={errors.username ? true : false}
                  helperText={errors?.username && errors.username.message}
                  inputRef={register({
                    required: {
                      value: true,
                      message: "Email or Phone is required.",
                    },
                  })}
                  InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <AccountBox className={classes.textfieldIconColor} />
                    //     </InputAdornment>
                    //   ),
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
                  // placeholder="Password"
                  color="primary"
                  fullWidth
                  error={errors.password !== undefined}
                  helperText={errors.password && errors.password.message}
                  inputRef={register({
                    required: { value: true, message: "Password is required." },
                    minLength: {
                      value: 6,
                      message: "Password must atlest 6 char.",
                    },
                  })}
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
                <Divider
                  variant="middle"
                  style={{ margin: "5px" }}
                  flexItem={true}
                  light={true}
                />

                <Box>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    align="center"
                  >
                    Not have account? <NavLink to="/signup">Signup</NavLink>
                  </Typography>
                </Box>
              </form>
            </Box>
          </Paper>
        </Container>
      </CentererLayout>
    </>
  );
};

export default LoginPage;
