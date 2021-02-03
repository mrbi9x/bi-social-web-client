import GlobalLayout from "layouts/GlobalLayout";
import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const TrendingPage: React.FC = () => {
  return (
    <GlobalLayout>
      <Container maxWidth="sm">
        <Typography variant="h1" color="initial">
          Trending page
        </Typography>
      </Container>
    </GlobalLayout>
  );
};

export default TrendingPage;
