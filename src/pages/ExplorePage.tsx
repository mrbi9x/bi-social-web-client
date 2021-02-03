import { Box, Paper, Container } from "@material-ui/core";
import GlobalLayout from "layouts/GlobalLayout";
import React from "react";

const ExplorePage: React.FC = () => {
  return (
    <>
      <GlobalLayout>
        <Container maxWidth="sm">
          <Paper>
            <Box p={2}>Explore page</Box>
          </Paper>
        </Container>
      </GlobalLayout>
    </>
  );
};

export default ExplorePage;
