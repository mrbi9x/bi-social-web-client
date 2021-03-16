import React from "react";
import CentererLayout from "layouts/CentererLayout";
import Container from "@material-ui/core/Container";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import Branding from "components/Branding";
import { NavLink } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
  EMAIL_PATTERN,
  validatePassword,
  validatePhone,
} from "utils/ValidattionUtil";
import { RegisterRequest } from "payloads/requests/RegisterRequest";
import { registerNewUser } from "apis/UserApi";

const useStyles = makeStyles((theme) => ({
  signinButton: {
    margin: theme.spacing(2, 0),
  },
}));

const RegisterPage = () => {
  const classes = useStyles();

  const {
    handleSubmit,
    control,
    errors: fieldErrors,
  } = useForm<RegisterRequest>({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const onRegister = async (data: RegisterRequest) => {
    console.log(data);
    try {
      const registerRes = await registerNewUser(data);
      console.log(registerRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CentererLayout>
        <Container maxWidth="xs">
          <Paper>
            <Box
              p={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Branding />
              <Typography variant="h6" color="initial" align="center">
                Register
              </Typography>
              <Box>
                <form onSubmit={handleSubmit(onRegister)} noValidate>
                  <Controller
                    name="displayName"
                    control={control}
                    defaultValue=""
                    render={({ value, onBlur, onChange }) => (
                      <TextField
                        id="displayname"
                        label="Display name"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        fullWidth
                        margin="normal"
                        helperText={
                          fieldErrors.displayName
                            ? fieldErrors.displayName.message
                            : undefined
                        }
                        error={!!fieldErrors.displayName}
                      />
                    )}
                  />
                  <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: {
                        value: true,
                        message: "Username is required.",
                      },
                    }}
                    render={({ value, onBlur, onChange }) => (
                      <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        autoComplete="false"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        fullWidth
                        required
                        margin="normal"
                        helperText={
                          fieldErrors.username
                            ? fieldErrors.username.message
                            : undefined
                        }
                        error={!!fieldErrors.username}
                      />
                    )}
                  />
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: {
                        value: true,
                        message: "Phone is required.",
                      },
                      validate: (value) => validatePhone(value),
                    }}
                    render={({ value, onBlur, onChange }) => (
                      <TextField
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        fullWidth
                        required
                        margin="normal"
                        helperText={
                          fieldErrors.phone
                            ? fieldErrors.phone.message
                            : undefined
                        }
                        error={!!fieldErrors.phone}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: { value: true, message: "Email is required." },
                      pattern: {
                        value: EMAIL_PATTERN,
                        message: "Invalid email format.",
                      },
                    }}
                    render={({ value, onChange, onBlur }) => (
                      <TextField
                        id="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        fullWidth
                        required
                        margin="normal"
                        helperText={
                          fieldErrors.email
                            ? fieldErrors.email.message
                            : undefined
                        }
                        error={!!fieldErrors.email}
                      />
                    )}
                  />
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: {
                        value: true,
                        message: "Password is required.",
                      },
                      validate: (value) => validatePassword(value),
                    }}
                    render={({ value, onChange, onBlur }) => (
                      <TextField
                        id="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        required
                        fullWidth
                        margin="normal"
                        helperText={
                          fieldErrors.password
                            ? fieldErrors.password.message
                            : undefined
                        }
                        error={!!fieldErrors.password}
                      />
                    )}
                  />
                  <Button
                    className={classes.signinButton}
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    fullWidth
                  >
                    Register
                  </Button>
                </form>
                <Typography variant="subtitle2" color="initial" align="center">
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </CentererLayout>
    </>
  );
};

export default RegisterPage;
