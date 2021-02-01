import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper, Typography } from "@material-ui/core";

const CentererLayout: React.FC = ({ children, ...props }) => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
      {...props}
    >
      {children}
      <Paper>
        <Typography variant="h1" color="initial">
          Centerer Layout
        </Typography>
      </Paper>
    </Grid>
  );
};

export default CentererLayout;
