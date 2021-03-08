import CentererLayout from "layouts/CentererLayout";
import React from "react";
import Container from "@material-ui/core/Container";
import { Box, Paper, Typography } from "@material-ui/core";
import Branding from "components/Branding";
import { NavLink } from "react-router-dom";

function SignupPage() {
  return (
    <>
      <CentererLayout>
        <Container maxWidth="xs">
          <Paper>
            <Box p={2}>
              <Branding />
              <Typography variant="body1" color="initial">
                Signup
              </Typography>
              <Box>
                <Typography variant="subtitle2" color="initial" align="center">
                  Already have account? <NavLink to="/login">Login</NavLink>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </CentererLayout>
    </>
  );
}

export default SignupPage;
