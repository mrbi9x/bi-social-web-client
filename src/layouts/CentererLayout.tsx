import React from "react";
import Grid from "@material-ui/core/Grid";

const CentererLayout: React.FC = ({ children, ...props }) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      alignContent="center"
      wrap="nowrap"
      style={{ height: "100vh" }}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default CentererLayout;
