import {
  Paper,
  Typography,
  Button,
  makeStyles,
  Theme,
  Box,
} from "@material-ui/core";
import CentererLayout from "layouts/CentererLayout";
import React from "react";
import { Home, ArrowBack } from "@material-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  rootPaper: {
    textAlign: "center",
    padding: theme.spacing(4),
  },
}));

export default function NotFoundPage() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <CentererLayout>
        <Paper elevation={24} className={classes.rootPaper}>
          <Typography variant="h1" color="initial" align="center">
            Not found
          </Typography>
          <Box display="flex" justifyContent="space-around">
            <Button
              variant="outlined"
              color="default"
              startIcon={<ArrowBack />}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="default"
              startIcon={<Home />}
              component={RouterLink}
              to="/"
            >
              Homepage
            </Button>
          </Box>
        </Paper>
      </CentererLayout>
    </>
  );
}
